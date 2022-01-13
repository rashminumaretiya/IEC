import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert.component';

const routes: Routes = [
  {
    path: '',
    component: AlertComponent,
  }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule { }