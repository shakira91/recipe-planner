import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  @Input() recipeToEdit: any;

  constructor() { }

  ngOnInit() {

  }

}
