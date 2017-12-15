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
	quizForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthServiceService) { }

  ngOnInit() {
  	this.quizForm = new FormGroup({
  		'fname' : new FormControl(null, Validators.required),
  		'lname' : new FormControl(null, Validators.required),
  		'username' : new FormControl(null, Validators.required),
  		'password' : new FormControl(null, Validators.required),
  		'email' : new FormControl(null, Validators.required),
  		'qOne' : new FormControl(null, Validators.required)
  	});
  }

  onSubmit() {
	this.authService.saveUser(this.quizForm.value).subscribe(
    data => console.log(data),
    error => console.log(error)
    );
  this.router.navigate(['/recipes/&q=' + this.quizForm.value.qOne]);
  }
}
