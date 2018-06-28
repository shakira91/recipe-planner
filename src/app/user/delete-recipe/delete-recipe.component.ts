import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-delete-recipe',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.css']
})
export class DeleteRecipeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }
  recipeImage: string = localStorage.getItem('recipe-image');
  recipeTitle: string = localStorage.getItem('recipe-title');
  recipeIngredients: string = localStorage.getItem('recipe-ingredients');


  deleteCanceled() {
    this.router.navigate(['user/' + localStorage.getItem('userId')]);
  }

  deleteRecipe() {
    this.router.navigate(['user/' + localStorage.getItem('userId')]);
    const body = {userId: localStorage.getItem('userId'), image: this.recipeImage, title: this.recipeTitle, ingredients: this.recipeIngredients};
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post('/delete', body)
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json())
    ).subscribe(
    	(data: any) => {
        console.log(data)
  		}, 
  		(error: any) => {
  			console.log(error);
  		}
    );
  }

  ngOnInit() {
    
  }

}
