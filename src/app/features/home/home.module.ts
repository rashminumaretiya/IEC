import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';
import { NgbAccordionModule, NgbDatepickerModule, NgbModalModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from 'src/app/shared/components/dropdown/dropdown.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbNavModule,
    CoreModule,
    NgbAccordionModule,
    NgbDatepickerModule,
    FormsModule,
    SharedModule,
    NgbModalModule
  ]
})
export class HomeModule { }
