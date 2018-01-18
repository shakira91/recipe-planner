import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.css']
})
export class SearchRecipesComponent implements OnInit {
  cuisine: string;
  constructor(private auth: AuthServiceService, private router: Router) { }

  onSignOut() {
  	this.auth.signOut();
  	this.router.navigate(["/"]);
  }
   getRecipes() {
    this.router.navigate(['recipes']);
   }

  ngOnInit() {
    this.cuisine = localStorage.getItem('cuisine');
  }

}
