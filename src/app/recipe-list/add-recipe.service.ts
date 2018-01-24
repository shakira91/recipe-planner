import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddRecipeService {

  constructor(private http: Http) { }

  addRecipe(recipeDetails) {
  	console.log(recipeDetails.image, recipeDetails.label, recipeDetails.ingredientLines);
  	const body = {	'image': recipeDetails.image, 
  					'title': recipeDetails.label,
  					'ingredients': recipeDetails.ingredientLines,
  					'userId' : localStorage.getItem('userId')
  				};
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post('http://127.0.0.1:3000/recipes', body, {headers: headers})
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json())
    );

  }

}
