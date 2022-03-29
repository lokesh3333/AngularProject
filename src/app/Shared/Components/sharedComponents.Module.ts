import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { MaterialModule } from 'src/app/material-module';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
    declarations: [
        
        TablePaginationComponent,FileUploadComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        FormsModule,
        MDBBootstrapModule.forRoot(),      
        NgxPaginationModule,
    ],
    exports: [
        TablePaginationComponent,FileUploadComponent
    ]
})
export class SharedComponentsModule { }