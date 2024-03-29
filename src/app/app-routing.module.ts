import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Cmp1Component } from '../cmp1/cmp1.component';
import { Cmp2Component } from '../cmp2/cmp2.component';
import { Subcmp1Component } from 'src/subcmp1/subcmp1.component';
import { Subcmp2Component } from 'src/subcmp2/subcmp2.component';
import { FormComponent } from 'src/form/form.component';

const routes: Routes = [
  {
    path: 'c1', component: Cmp1Component
  },
  {
    path: 'c1/:id', component: Subcmp1Component
  },
  {
    path: 'c2', component: Cmp2Component, children: [
      {path: 'sub1/:id', component: Subcmp1Component},
      {path: 'sub2/:id', component: Subcmp2Component}
    ]
  },
  {
    path: 'form', component: FormComponent
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
