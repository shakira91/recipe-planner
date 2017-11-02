import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Http, Response, RequestOptions, Headers, Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //recipesReturned: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
 	this.http.sendRequest(null, null, null).subscribe(
 		(data) => {
 			console.log(data)
 		}
 	)
  }

}
