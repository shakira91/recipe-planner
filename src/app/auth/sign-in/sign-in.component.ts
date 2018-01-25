import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  signedIn: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthServiceService, private shared: SharedService) { }

  ngOnInit() {
  	this.signInForm = new FormGroup({
  		'username' : new FormControl(null, Validators.required),
  		'password' : new FormControl(null, Validators.required),
  	});

    if(this.authService.isLoggedIn()) {
      this.router.navigate(['user']);
    }
  }

  onSubmit() {
  	this.authService.signIn(this.signInForm.value).subscribe(
      data => {
      	localStorage.setItem('token', data.token);
      	localStorage.setItem('userId', data.userId);
      	localStorage.setItem('cuisine', data.cuisine);
        this.shared.displayRecipes(data.recipes);
        this.signedIn = true;
        this.router.navigate(['user/' + localStorage.getItem('userId')]);
      },
      error => console.log(error)
      );
  }

}
