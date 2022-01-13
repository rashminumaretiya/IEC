import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertRoutingModule } from './alert-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    AlertRoutingModule,
    SharedModule,
  ]
})
export class AlertModule { }
