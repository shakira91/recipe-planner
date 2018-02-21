import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-recipe',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.css']
})
export class DeleteRecipeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  recipeImage: string = localStorage.getItem('recipe-image');
  recipeTitle: string = localStorage.getItem('recipe-title');
  recipeIngredients: string = localStorage.getItem('recipe-ingredients');


  deleteCanceled() {
    this.router.navigate(['user/' + localStorage.getItem('userId')]);
  }

  deleteRecipe() {

  }


  ngOnInit() {
    
  }

}
