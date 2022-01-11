import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public modalRef: any;
  @ViewChild('propertyDetailsModal') propertyDetailsModalRef!: TemplateRef<any>;
  @ViewChild('changePasswordModal') changePasswordModalRef!: TemplateRef<any>;
  @ViewChild('contactPopupModal') contactPopupModalRef!: TemplateRef<any>;
  @ViewChild('sendAgainModal') sendAgainModalRef!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  public closeModalEvent(isCloseModal: any): void {
    console.log(`closeModalEvent isCloseModal`, isCloseModal);
    if (isCloseModal) {
      this.modalRef.close();
    }
  }

  public openPopup(): void {
    console.log('openPopup', this.propertyDetailsModalRef);
    this.modalRef = this.modalService.open(this.propertyDetailsModalRef, {
      centered: true,
      size: 'md',
      modalDialogClass: 'property-modal',
    });
  }
  public changePassword(): void {
    console.log('changePassword', this.changePasswordModalRef);
    this.modalRef = this.modalService.open(this.changePasswordModalRef, {
      centered: true,
      size: 'md',
      modalDialogClass: 'property-modal',
    });
  }
  public sendSgainPopup(): void {
    console.log('sendSgainPopup', this.sendAgainModalRef);
    this.modalRef = this.modalService.open(this.sendAgainModalRef, {
      centered: true,
      size: 'md',
      modalDialogClass: 'property-modal',
    });
  }
  public contactPopup(): void {
    console.log('contactPopup', this.contactPopupModalRef);
    this.modalRef = this.modalService.open(this.contactPopupModalRef, {
      centered: true,
      size: 'lg',
      modalDialogClass: 'property-modal',
    });
  }
}
