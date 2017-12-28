import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthServiceService {
  constructor(private http: Http) { }

   
  callRecipes(params: any) {
  	const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });
  	const recipeUrl = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'+ params +'&to=99&app_id=2913d905&app_key=78453acb21d06083dfdfea5bf9da7181';
  	return this.http.request(recipeUrl, options).map(
  		(response: Response) => {
  			const data = response.json();
  			return data;
  	});
  }

  signIn(userData: User) {
    const body = JSON.stringify(userData);
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post('http://127.0.0.1:3000/signin', body, {headers: headers})
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json())
    );
  }

  signUp(userData: User) {
  	const body = JSON.stringify(userData);
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post('http://127.0.0.1:3000/signup', body, {headers: headers})
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json())
    );

  }

  signOut() {
  	localStorage.clear();
  }

  isLoggedIn() {
  	return localStorage.getItem("token") !== null;
  }

}
