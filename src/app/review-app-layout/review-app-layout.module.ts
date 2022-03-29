import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewAppLayoutRoutingModule } from './review-app-layout-routing.module';
import { SharedComponentsModule } from '../Shared/Components/sharedComponents.Module';
import { MaterialModule } from '../material-module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ReviewAppLayoutComponent } from './review-app-layout.component';

@NgModule({
  declarations: [ReviewAppLayoutComponent],
  imports: [
    CommonModule,
    ReviewAppLayoutRoutingModule,
    SharedComponentsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ]
})
export class ReviewAppLayoutModule { }
