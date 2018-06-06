import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { Http, Response, RequestOptions, Headers, Jsonp} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AddRecipeService } from './add-recipe.service'
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
  show: boolean;
  recipeAdded: boolean;
  userId: any;
  @ViewChild('recipeWrapper') recipeWrapper;
  constructor(private authService: AuthServiceService, private route: ActivatedRoute, private renderer: Renderer2, private addRecipe: AddRecipeService, private router: Router) { }

  showRecipe(recipe) {
  	this.hovered = true;
  	this.recipeDetail = recipe.recipe;
  }

  recipesScrolled() {
    for (var i = 0; i < this.recipeWrapper.nativeElement.children.length; i++) {
      var bounding = this.recipeWrapper.nativeElement.children[i].getBoundingClientRect()
      if (bounding.top >= 0 && bounding.left + 500 >= 0 &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        this.renderer.addClass(this.recipeWrapper.nativeElement.children[i], "show");
      }
    }
  }
  addARecipe(details) {
    this.recipeAdded = true;
  	this.addRecipe.addRecipe(details).subscribe(
        data => {
        console.log(data)

      },
      error => {
        console.log(error)
      }
    );
  }

  checkRecipes() {
    this.router.navigate(['../user/' + this.userId]);
  }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
  	this.authService.callRecipes(localStorage.getItem('cuisine')).subscribe(
  		(data: any) => {
  			this.recipes = data.hits;
  		}
    );
  }

}
