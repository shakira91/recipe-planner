import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  constructor(private http: Http) { }

   
  callRecipes(q1, q2, q3) {
  	const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });
  	const recipeUrl = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?diet='+ q1 +'&ingr='+ q2 +'&q='+ q3 +'&app_id=2913d905&app_key=78453acb21d06083dfdfea5bf9da7181';
	return this.http.request(recipeUrl, options).map(
		(response: Response) => {
			const data = response.json();
			return data;
	});
  }

}
