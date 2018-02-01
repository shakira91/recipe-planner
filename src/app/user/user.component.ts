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

  constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }

  editRecipe(recipe, index) {
    localStorage.setItem('recipe-index', index);
    localStorage.setItem('recipe-image', recipe[0]);
    localStorage.setItem('recipe-title', recipe[1]);
    localStorage.setItem('recipe-ingredients', recipe[2]);
    this.router.navigate(['edit/' + localStorage.getItem('userId')]);
  }

  ngOnInit() {
  	const body = { username: localStorage.getItem('username') };
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post('http://127.0.0.1:3000/user', body)
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json())
    ).subscribe(
    	(data: any) => {
        this.savedRecipes = data.recipes;
  		}, 
  		(error: any) => {
  			console.log(error);
  		}
    );
  }

}
