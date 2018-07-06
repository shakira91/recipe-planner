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
  addRecipeForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  addRecipe() {
    const body = {formData: this.addRecipeForm.value, userId: localStorage.getItem('userId')};
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post('/add', body)
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

  fileEvent(event){
    console.log(event.target.files[0].name)
  }

  addingCanceled() {
    this.router.navigate(['user/' + localStorage.getItem('userId')]);
  }

  ngOnInit() {
    this.addRecipeForm = new FormGroup({
      title : new FormControl(null),
      ingredients : new FormControl(null),
    });

   
  }

}
