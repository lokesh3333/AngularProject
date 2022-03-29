import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './material-module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { TotalComponent } from './total/total.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@NgModule({                                           
  declarations: [AppComponent, FilterPipe, TotalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    LayoutModule,
    FormsModule,
                                                                                         
  ],
  providers: [
    DatePipe
   ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
