import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iec-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() selectedValue!: string;
  @Input() lists!: string[];

  isDropdownOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(value: string) {
    this.selectedValue = value;
    this.isDropdownOpen = false;
  }
}
