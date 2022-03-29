import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: () => import('src/app/review-app-layout/review-app-layout.module').then(m => m.ReviewAppLayoutModule) },
  { path: 'product', loadChildren: () => import('src/app/review-app-layout/product/product.module').then(m => m.ProductModule) },

  { path: '', loadChildren: () => import('src/app/total/quotes/quotes.module').then(m => m.QuotesModule) },
  { path: 'quotes', loadChildren: () => import('src/app/total/quotes/quotes.module').then(m => m.QuotesModule) },
  { path: '*', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }