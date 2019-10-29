import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Cmp1Component } from '../cmp1/cmp1.component';
import { Cmp2Component } from '../cmp2/cmp2.component';
import { Subcmp1Component } from 'src/subcmp1/subcmp1.component';

const routes: Routes = [
  {
    path: 'c1', component: Cmp1Component
  },
  {
    path: 'c1/:id', component: Subcmp1Component
  },
  {
    path: 'c2', component: Cmp2Component
  },
  {
    path: '', component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
