import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { MaterialModule } from 'src/app/material-module';
import { SharedComponentsModule } from 'src/app/Shared/Components/sharedComponents.Module';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    SharedComponentsModule,
    FormsModule,
    MDBBootstrapModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ProductModule { }


