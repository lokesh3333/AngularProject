import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/total/quotes/quotes.module').then(m => m.QuotesModule) },
  { path: 'quotes', loadChildren: () => import('src/app/total/quotes/quotes.module').then(m => m.QuotesModule) },
  { path: '*', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }