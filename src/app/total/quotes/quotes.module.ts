import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes.component';
import { MaterialModule } from 'src/app/material-module';
import { SharedComponentsModule } from 'src/app/Shared/Components/sharedComponents.Module';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { QuotesRoutingModule } from './quotes-routing.module';


@NgModule({
  declarations: [QuotesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedComponentsModule,
    FormsModule,
    MDBBootstrapModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    QuotesRoutingModule
  ]
})
export class QuotesModule { }
