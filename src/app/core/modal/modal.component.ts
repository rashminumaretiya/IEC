import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() isCloseModal = new EventEmitter<boolean>();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  /**
   * closeModal
   */
  public closeModal() {
    this.isCloseModal.emit(true);
  }
}
