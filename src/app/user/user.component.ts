import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private auth: AuthServiceService, private router: Router) { }

  onSignOut() {
  	this.auth.signOut();
  	this.router.navigate(["/"]);
  }

  ngOnInit() {
  }

}
