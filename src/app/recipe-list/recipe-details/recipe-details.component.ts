import { Component, OnInit, Input } from '@angular/core';
import { AddRecipeService } from '../add-recipe.service'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() details;

  constructor(private addRecipe: AddRecipeService) { }

  addARecipe(details) {
  	this.addRecipe.addRecipe(details);
  }

  ngOnInit() {

  }

}
