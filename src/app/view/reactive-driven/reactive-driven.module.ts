import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveDrivenComponent } from './reactive-driven.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropdownService } from 'src/app/service/dropdown.service';

@NgModule({
  declarations: [
    ReactiveDrivenComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ReactiveDrivenModule { }
