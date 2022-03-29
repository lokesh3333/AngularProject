import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FileAttachment, Metadata, FileUploadModel } from "./file-attachment.model";
import { HttpClient, HttpResponse, HttpRequest, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';
@Component({
  selector: 'tru-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 100 })),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FileUploadComponent implements OnInit, OnChanges {
  metadata: Metadata[] = [];
  @Input()
  multiple;
  @Input()
  text: string;
  @Input()
  inputMetadata = [];
  @Input()
  documentName: string;
  @Input()
  inputFiles: FileAttachment[] = [];
  @Input()
  accept;
  @Output()
  inputFilesUpdated: EventEmitter<any>;
  public files = [];
  @Input() param = 'file';
  /** Target URL for file uploading. */
  @Input() target = 'https://file.io';
  @Input() disabled: boolean;
  /** File extension that accepted, same as 'accept' of <input type="file" />. 
      By the default, it's set to 'image/*'. */
  //@Input() accept = 'image/*';
  /** Allow you to add handler after its completion. Bubble up response text from remote. */
  @Output() complete = new EventEmitter<string>();
  constructor(private _http: HttpClient) {
  }
  onClick() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({
          data: file, state: 'in',
          inProgress: false, progress: 0, canRetry: false, canCancel: true
        });
      }
      let test = [];
      if (fileUpload.files != null) {
        test.push({ files: fileUpload.files });
        this.onFileSelect(test[0]);
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }
  onFileSelect(event) {
    // if (!this.showUploadButton) {
    for (const file of event.files) {
      if (this.isFileTypeAllowed(file)) {
        const indexOfExistingFile: number = this.inputFiles.findIndex(item => item.name === file.name);
        if (-1 !== indexOfExistingFile) {
          this.inputFiles.splice(indexOfExistingFile, 1);
        }
        this.addFileObject(file);
      } else {
        const i = this.files.findIndex(x => x["data"].name === file.name);
        if (i !== -1) {
          this.files.splice(i, 1);
        }
      }
    }
  }
  isFileTypeAllowed(file): boolean {
    let fileExtension = file.name.split('.');
    fileExtension = fileExtension[fileExtension.length - 1];
    if ((file.type &&
      (-1 !== this.accept.indexOf(file.type.split('/')[0])
        || -1 !== this.accept.indexOf(file.type.split('/')[1])))
      || -1 !== this.accept.indexOf(fileExtension)) {
      return true;
    } else {
      return false;
    }
  }
  addFileObject(file) {
    const reader: FileReader = new FileReader();
    reader.onload = (e) => {
      const fileAttachment: FileAttachment = new FileAttachment();
      let fileContent: any = reader.result;
      fileContent = fileContent.split('base64,')[1];
      fileAttachment.content = fileContent;
      fileAttachment.name = file.name;
      fileAttachment.type = file.type !== '' ? file.type : `application/${file.name.split('.').pop()}`
      fileAttachment.size = file.size;
      if (this.documentName != null && this.documentName != undefined) {
        fileAttachment.documentName = this.documentName;
      }
      fileAttachment.metadata = this.inputMetadata.concat(this.metadata);
      this.inputFiles.push(fileAttachment);
    };
    reader.readAsDataURL(file);
  }
  cancelFile(file: FileUploadModel) {
    file.sub.unsubscribe();
    this.removeFileFromArray(file);
  }

  retryFile(file: FileUploadModel) {
    this.uploadFile(file);
    file.canRetry = false;
  }

  private uploadFile(file: FileUploadModel) {
    const fd = new FormData();
    fd.append(this.param, file.data);

    const req = new HttpRequest('POST', this.target, fd, {
      reportProgress: true
    });

    file.inProgress = true;
    file.sub = this._http.request(req).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      tap(message => { }),
      last(),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        file.canRetry = true;
        return of(`${file.data.name} upload failed.`);
      })
    ).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          //this.removeFileFromArray(file);
          this.complete.emit(event.body);
        }
      }
    );
  }

  private uploadFiles() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.value = '';

    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

  private removeFileFromArray(file: FileUploadModel) {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
    const i = this.inputFiles.findIndex(x => x.name === file.data.name);
    if (i > -1) {
      this.inputFiles.splice(i, 1);
    }
  }
  onInputFilesUpdated(event) {
    this.inputFilesUpdated.emit(this.inputFiles);
  }
  ngOnInit() {
  }
  trackByFn(index, item) {
    return item.id;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.inputFiles && !changes.inputFiles.firstChange && changes.inputFiles.currentValue.length === 0) {
      this.files = [];
    }
  }
}