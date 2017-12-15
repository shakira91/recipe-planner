import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { Http, Response, RequestOptions, Headers, Jsonp} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any;
  recipeDetail: any;
  hovered: boolean = false;

  constructor(private authService: AuthServiceService, private route: ActivatedRoute) { }

  showRecipe(recipe) {
  	this.hovered =  true;
  	this.recipeDetail = recipe.recipe;
  }

  ngOnInit() {
  	this.authService.callRecipes(this.route.snapshot.params.id).subscribe(
  		(data: any) => {
  			this.recipes = data.hits;
  		}
  	);
  }

}
