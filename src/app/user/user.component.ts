import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  savedRecipes: any;
  editRecipeClicked: any;
  editingRecipe: boolean = false;
  savedRecipesLength: any; 
  cuisine: string;

  constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }


  deleteRecipe(recipe, index) {
    this.router.navigate(['delete/' + localStorage.getItem('userId')]);
    const body = { username: localStorage.getItem('username') };
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post('http://127.0.0.1:3000/delete', body)
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

  addUserRecipe(){
    this.router.navigate(['add/' + localStorage.getItem('userId')]);
  }

  ngOnInit() {
    this.cuisine = localStorage.getItem('cuisine');
    
  	const body = { username: localStorage.getItem('username') };
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post('http://127.0.0.1:3000/user', body)
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json())
    ).subscribe(
    	(data: any) => {
        console.log(data)
        this.savedRecipesLength = data.recipes.length;
        localStorage.setItem('recipes', this.savedRecipesLength);
        if(this.savedRecipesLength != 0) {
          this.savedRecipes = data.recipes;
        }      
  		}, 
  		(error: any) => {
  			console.log(error);
  		}
    );
  }

}
