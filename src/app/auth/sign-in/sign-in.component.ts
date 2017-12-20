import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { User } from "../user.model";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthServiceService) { }

  ngOnInit() {
  	this.signInForm = new FormGroup({
  		'username' : new FormControl(null, Validators.required),
  		'password' : new FormControl(null, Validators.required),
  	});
  }

  onSubmit() {
  	this.authService.checkUser(this.signInForm.value).subscribe(
      data => console.log(data),
      error => console.log(error)
      );
    this.router.navigate(['/user']);
  }

}
