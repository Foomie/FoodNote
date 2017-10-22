import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { App2Component } from './app2/app2.component';
import { App1Component } from './app1/app1.component';

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    App1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
