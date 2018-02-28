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
  newImage: File = null; 
  addRecipeForm: FormGroup; 
  apiEndPoint: any = 'http://localhost:3000/uploads'

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  uploadImg(image) {
    console.log(image)
      let fileList: FileList = image.target.files;
      if(fileList.length > 0) {
          let file: File = fileList[0];
          let formData:FormData = new FormData();
          formData.append('uploadFile', file, file.name);
          let headers = new Headers();
          /** No need to include Content-Type in Angular 4 */
          //headers.append('Accept', 'application/json');
          let options = new RequestOptions({ headers: headers });
          this.http.post(`${this.apiEndPoint}`, formData, options)
              .map(res => res.json())
              .catch(error => Observable.throw(error))
              .subscribe(
                  data => console.log('success'),
                  error => console.log(error)
              )
      }
  }
  
  addRecipe() {
    const body = {formData: this.addRecipeForm.value, image: this.newImage, userId: localStorage.getItem('userId')};
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
    this.addRecipeForm = new FormGroup({
      title : new FormControl(null),
      ingredients : new FormControl(null),
    })
  }

}
