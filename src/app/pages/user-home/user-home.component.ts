import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
venueBooking:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  createEvent(){
    this.venueBooking = true;
  }
}
