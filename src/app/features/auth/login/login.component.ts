import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public modalRef: any;
  public loginForm: FormGroup = this.fb.group({});
  public isInvalidForm: boolean = false;

  @ViewChild('propertyDetailsModal') propertyDetailsModalRef!: TemplateRef<any>;
  @ViewChild('changePasswordModal') changePasswordModalRef!: TemplateRef<any>;
  @ViewChild('contactPopupModal') contactPopupModalRef!: TemplateRef<any>;
  @ViewChild('sendAgainModal') sendAgainModalRef!: TemplateRef<any>;
  @ViewChild('forgotPopupModal') forgotPopupModalRef!: TemplateRef<any>;
  @ViewChild('wrongPopupModal') wrongPopupModalRef!: TemplateRef<any>;
  @ViewChild('orderDetailsModal') orderDetailsModalRef!: TemplateRef<any>;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  public closeModalEvent(isCloseModal: any): void {
    console.log(`closeModalEvent isCloseModal`, isCloseModal);
    if (isCloseModal) {
      this.modalRef.close();
    }
  }

  public openPopup(): void {
    this.modalRef && this.modalRef.close();
    console.log('openPopup', this.propertyDetailsModalRef);
    this.modalRef = this.modalService.open(this.propertyDetailsModalRef, {
      centered: true,
      size: 'md',
      modalDialogClass: 'property-modal',
    });
  }
  public changePassword(): void {
    this.modalRef && this.modalRef.close();
    console.log('changePassword', this.changePasswordModalRef);
    this.modalRef = this.modalService.open(this.changePasswordModalRef, {
      centered: true,
      size: 'md',
      modalDialogClass: 'property-modal',
    });
  }

  public sendSgainPopup(): void {
    this.modalRef && this.modalRef.close();

    console.log('sendSgainPopup', this.sendAgainModalRef);
    this.modalRef = this.modalService.open(this.sendAgainModalRef, {
      centered: true,
      size: 'md',
      modalDialogClass: 'property-modal',
    });
  }
  public popupForgot(): void {
    this.modalRef && this.modalRef.close();

    console.log('popupForgot', this.forgotPopupModalRef);
    this.modalRef = this.modalService.open(this.forgotPopupModalRef, {
      centered: true,
      size: 'md',
      modalDialogClass: 'property-modal',
    });
  }
  public popupWrong(): void {
    this.modalRef && this.modalRef.close();

    console.log('popupForgot', this.wrongPopupModalRef);
    this.modalRef = this.modalService.open(this.wrongPopupModalRef, {
      centered: true,
      size: 'md',
      modalDialogClass: 'property-modal',
    });
  }

  public contactPopup(): void {
    this.modalRef && this.modalRef.close();

    console.log('contactPopup', this.contactPopupModalRef);
    this.modalRef = this.modalService.open(this.contactPopupModalRef, {
      centered: true,
      size: 'lg',
      modalDialogClass: 'modal-contact-us',
    });
  }

  public orderDetailsPopup(): void {
    this.modalRef && this.modalRef.close();

    console.log('orderDetailsPopup', this.orderDetailsModalRef);
    this.modalRef = this.modalService.open(this.orderDetailsModalRef, {
      centered: true,
      size: 'lg',
      modalDialogClass: 'property-modal',
    });
  }

  loginFormSubmit() {
    console.log(`this.loginForm`, this.loginForm)
    if(this.loginForm.invalid) {
      this.isInvalidForm = true;
    }
  }
}
