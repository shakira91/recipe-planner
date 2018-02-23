import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  signUpClicked: any = false;
  signInClicked: any = true;

  constructor() { }

  showSignUp() {
    this.signUpClicked = true;
    this.signInClicked = false;
  }

  showSignIn() {
    this.signInClicked = true;
    this.signUpClicked = false;
  }
  

  ngOnInit() {
  }

}
