import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-time-user',
  templateUrl: './first-time-user.component.html',
  styleUrls: ['./first-time-user.component.css']
})
export class FirstTimeUserComponent implements OnInit {
  cuisine: string;

  constructor() { }

  ngOnInit() {
    this.cuisine = localStorage.getItem('cuisine');
   
  }

}
