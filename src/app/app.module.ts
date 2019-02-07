import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveDrivenComponent } from './view/reactive-driven/reactive-driven.component';
import { TemplateDrivenModule } from './view/template-driven/template-driven.module';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveDrivenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateDrivenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
