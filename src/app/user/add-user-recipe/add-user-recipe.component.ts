import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-user-recipe',
  templateUrl: './add-user-recipe.component.html',
  styleUrls: ['./add-user-recipe.component.css']
})
export class AddUserRecipeComponent implements OnInit {

  recipeImage: string = localStorage.getItem('recipe-image');
  recipeTitle: string = localStorage.getItem('recipe-title');
  recipeIngredients: string = localStorage.getItem('recipe-ingredients');
  newImage: string; 
  addRecipeForm: FormGroup; 

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  uploadImg(image) {
    this.newImage = image;
  }
  
  addRecipe() {
    const body = {formData: this.addRecipeForm.value, image: this.recipeImage, title: this.recipeTitle, ingredients: this.recipeIngredients, index: localStorage.getItem('recipe-index'), userId: localStorage.getItem('userId')};
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post('http://127.0.0.1:3000/add', body)
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json())
    ).subscribe(
    	(data: any) => {
        console.log(data)
        this.router.navigate(['user/' + localStorage.getItem('userId')]);
  		}, 
  		(error: any) => {
  			console.log(error);
  		}
    );
    
  }

  addingCanceled() {
    this.router.navigate(['user/' + localStorage.getItem('userId')]);
  }

  ngOnInit() {
    this.newImage = "https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"; 
    this.addRecipeForm = new FormGroup({
      title : new FormControl(null),
      ingredients : new FormControl(null),
    })
  }

}
