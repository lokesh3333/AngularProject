import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'tru-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent {
  @Input() tabledata: any;
  public getheader = [];
  public fetchdata = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    //---if input id changes then get details of that id---//
    if (changes.tabledata && this.tabledata && this.tabledata != undefined && this.tabledata != null) {
      this.getheader = this.tabledata.header;
      this.fetchdata = this.tabledata.response;
    }
  }

  trackByFn(index, item) {
    return item.id; // unique id corresponding to the item
  }

}
