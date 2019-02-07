import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveDrivenComponent } from './view/reactive-driven/reactive-driven.component';
import { TemplateDrivenComponent } from './view/template-driven/template-driven.component';

const routes: Routes = [
  { path: 'template', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveDrivenComponent },
  { path: '', pathMatch: 'full', redirectTo: 'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
