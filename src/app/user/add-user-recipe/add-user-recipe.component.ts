import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://127.0.0.1:3000/uploadImg';

@Component({
  selector: 'app-add-user-recipe',
  templateUrl: './add-user-recipe.component.html',
  styleUrls: ['./add-user-recipe.component.css']
})
export class AddUserRecipeComponent implements OnInit {

  recipeImage: string = localStorage.getItem('recipe-image');
  recipeTitle: string = localStorage.getItem('recipe-title');
  recipeIngredients: string = localStorage.getItem('recipe-ingredients');
  newImage: File; 
  addRecipeForm: FormGroup;
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  addRecipe() {
    const body = {formData: this.addRecipeForm.value, image: this.newImage, userId: localStorage.getItem('userId')};
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

  addingCanceled() {
    this.router.navigate(['user/' + localStorage.getItem('userId')]);
  }

  ngOnInit() {
    this.addRecipeForm = new FormGroup({
      title : new FormControl(null),
      ingredients : new FormControl(null),
    });
      this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
      this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
           console.log("ImageUpload:uploaded:", item, status, response);
           this.newImage = response.split(" ").slice(-1).join();
       };
   
  }

}
