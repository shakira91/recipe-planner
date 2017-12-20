import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { User } from "../user.model";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
	signUpForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthServiceService) { }

  ngOnInit() {
  	this.signUpForm = new FormGroup({
  		'fname' : new FormControl(null, Validators.required),
  		'lname' : new FormControl(null, Validators.required),
  		'username' : new FormControl(null, Validators.required),
  		'password' : new FormControl(null, Validators.required),
  		'email' : new FormControl(null, Validators.required),
  		'qOne' : new FormControl(null, Validators.required)
  	});
  }

  onSubmit() {
    const user = new User (
      this.signUpForm.value.fname,
      this.signUpForm.value.lname,
      this.signUpForm.value.username,
      this.signUpForm.value.password,
      this.signUpForm.value.email,
      this.signUpForm.value.qOne
    );
  	this.authService.saveUser(user).subscribe(
      data => console.log(data),
      error => console.log(error)
      );
    this.router.navigate(['/recipes/&q=' + this.signUpForm.value.qOne]);
  }
}
