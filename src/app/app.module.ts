import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveDrivenModule } from './view/reactive-driven/reactive-driven.module';
import { SharedModule } from './shared/shared.module';
import { TemplateDrivenModule } from './view/template-driven/template-driven.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveDrivenModule,
    SharedModule,
    TemplateDrivenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
