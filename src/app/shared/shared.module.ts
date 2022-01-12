import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  exports: [DropdownComponent]
})
export class SharedModule { }
