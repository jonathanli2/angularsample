import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp1Component } from '../cmp1/cmp1.component';
import { Cmp2Component } from '../cmp2/cmp2.component';
import { Subcmp1Component } from '../subcmp1/subcmp1.component';
import { Subcmp2Component } from '../subcmp2/subcmp2.component';


@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component,
    Cmp2Component,
    Subcmp1Component,
    Subcmp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
