import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../Shared/Components/sharedComponents.Module';
import { MaterialModule } from '../material-module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { TotalRoutingModule } from './total-routing.module';
import { TotalComponent } from './total.component';
import { BrowserModule } from '@angular/platform-browser';
// import { MapsComponent } from './maps/maps.component';


@NgModule({
  declarations: [TotalComponent],
  imports: [
    CommonModule,
    TotalRoutingModule,
    CommonModule,
    SharedComponentsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserModule
  ]
})
export class TotalModule { }
