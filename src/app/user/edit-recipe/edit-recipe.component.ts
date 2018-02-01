import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  recipeImage: string = localStorage.getItem('recipe-image');
  recipeTitle: string = localStorage.getItem('recipe-title');
  recipeIngredients: string = localStorage.getItem('recipe-ingredients');
  editForm: FormGroup; 

  constructor(private router: Router, private route: ActivatedRoute) { }
  
  saveEdit() {
    console.log(this.editForm.value)
  }

  editingCanceled() {
    this.router.navigate(['user/' + localStorage.getItem('userId')]);
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      title : new FormControl(),
      ingredients : new FormControl(),
    })
  }

}
