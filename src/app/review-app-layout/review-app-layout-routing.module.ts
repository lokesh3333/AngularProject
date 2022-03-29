import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewAppLayoutComponent } from './review-app-layout.component';
const routes: Routes = [
  {
    path: '',
    component: ReviewAppLayoutComponent,
    children: [
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewAppLayoutRoutingModule { }
