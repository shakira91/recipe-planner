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
  	this.hovered = true;
  	this.recipeDetail = recipe.recipe;
  }

  ngOnInit() {
  	this.authService.callRecipes(localStorage.getItem('cuisine')).subscribe(
  		(data: any) => {
  			this.recipes = data.hits;
  		}
    );
    
    document.getElementById("recipe-wrapper").addEventListener("scroll", function() {
          
      for (var i = 0; i < document.querySelectorAll(".recipe-item").length; i++) {
          console.log(document.querySelectorAll(".recipe-item")[i])
         var bounding = document.querySelectorAll(".recipe-item")[i].getBoundingClientRect()
    if (bounding.top >= 0 && bounding.left + 500 >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
       console.log(document.querySelectorAll(".recipe-item")[i])
    } else {
        
    }
      
      
      }
      

  });
  }

}
