import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.css']
})
export class SearchRecipesComponent implements OnInit {
  logo: any = '../assets/images/recipe-book-logo.png';
  cuisine: string = '';
  numberOfRecipes: any;
  
  constructor(private auth: AuthServiceService, private router: Router) { }

  onSignOut() {
  	this.auth.signOut();
  	this.router.navigate(["/"]);
  }
  getRecipes() {
    localStorage.setItem('cuisine', this.cuisine);
    this.router.navigate(['recipes']);
   }

  userRecipes() {
    this.router.navigate(['user/' + localStorage.getItem('userId')]);
   }

  ngOnInit() {
    this.cuisine = localStorage.getItem('cuisine');
    this.numberOfRecipes = localStorage.getItem('recipes');
  }

}
