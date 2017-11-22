import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { Section2Component } from './section-2/section-2.component';
import { StylingComponent } from './styling/styling.component';
import { Section2FinnalComponent } from './section-2-finnal/section-2-finnal.component';

@NgModule({
  declarations: [
    AppComponent,
    Section2Component,
    StylingComponent,
    Section2FinnalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
