import { Component, OnInit, Input} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  options: object = {
  strings: ["“There is no love sincerer than the love of food.” -- George Bernard Shaw, Man and Superman"],
  typeSpeed: 50,
  startDelay: 300
  };

  logo: any = '../assets/images/recipe-book-logo.png';

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
    //const quote = new Typed(".quote", this.options);
  }

}
