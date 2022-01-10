import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbActiveModal, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, ModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule, 
    NgbDropdownModule,
  ],
  exports: [HeaderComponent, FooterComponent, ModalComponent],
  providers:[NgbActiveModal]
})
export class CoreModule {}
