import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TemplateDrivenComponent } from './template-driven.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TemplateDrivenComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class TemplateDrivenModule { }
