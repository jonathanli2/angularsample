import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp1Component } from '../cmp1/cmp1.component';
import { Cmp2Component } from '../cmp2/cmp2.component';
import { Subcmp1Component } from '../subcmp1/subcmp1.component';
import { Subcmp2Component } from '../subcmp2/subcmp2.component';
import { Routes, RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BasicHighLightDirective } from '../directive/basic-highlight.directive';
import { MessagingService } from '../messaging/messaging.service';
import { FormsModule, NgModel } from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactFormComponent } from '../react-form/react-form.component';
import { HttpComponent } from '../http/http.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component,
    Cmp2Component,
    Subcmp1Component,
    Subcmp2Component,
    BasicHighLightDirective,
    FormComponent,
    ReactFormComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
