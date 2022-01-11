import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public model!: NgbDateStruct;
  public model1!: NgbDateStruct;
  public date!: {year: number, month: number};

  constructor(private calendar: NgbCalendar) {  }  

  selectToday() {
    this.model = this.calendar.getToday();
  }
  selectToday1() {
    this.model1 = this.calendar.getToday();
  }

  isSearchFilter: boolean = false;
  isDropdownOpen: boolean = false;

  ngOnInit(): void {

  }


}
