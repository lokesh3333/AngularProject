import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { TotalRoutingModule } from './total-routing.module';
import { TotalComponent } from './total.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [TotalComponent],
  imports: [
    CommonModule,
    TotalRoutingModule,
    CommonModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserModule
  ]
})
export class TotalModule { }
