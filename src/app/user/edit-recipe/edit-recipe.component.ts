import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

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

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }
  
  saveEdit() {
    const body = {formData: this.editForm.value, image: localStorage.getItem('recipe-image'), index: localStorage.getItem('recipe-index'), userId: localStorage.getItem('userId'), title: localStorage.getItem('recipe-title')};
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post('http://127.0.0.1:3000/edit', body)
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

  editingCanceled() {
    this.router.navigate(['user/' + localStorage.getItem('userId')]);
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      title : new FormControl(null),
      ingredients : new FormControl(null),
    })
  }

}