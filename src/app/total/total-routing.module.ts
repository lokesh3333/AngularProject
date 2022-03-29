import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TotalComponent } from './total.component';


const routes: Routes = [

  {
    path: '',
    component: TotalComponent,
    children: [
      {
        path: 'quotes',
        loadChildren: () => import('./quotes/quotes.module').then(m => m.QuotesModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TotalRoutingModule { }
