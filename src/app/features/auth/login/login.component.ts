import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public modalRef:any;
  @ViewChild('propertyDetailsModal') propertyDetailsModalRef!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  public closeModalEvent(isCloseModal:any): void {
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
}
