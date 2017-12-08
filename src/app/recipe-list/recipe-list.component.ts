import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
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

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  showRecipe(recipe) {
  	this.hovered =  true;
  	this.recipeDetail = recipe.recipe;
  }

  ngOnInit() {
  	this.http.callRecipes(this.route.snapshot.params.id).subscribe(
  		(data: any) => {
  			this.recipes = data.hits;
  		}
  	);
  }

}
