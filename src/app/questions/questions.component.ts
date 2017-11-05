import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  quizForm: FormGroup;
  recipes: any;

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.quizForm = new FormGroup({
  		'qOne' : new FormControl(null, Validators.required),
  		'qTwo' : new FormControl(null, Validators.required),
  		'qThree' : new FormControl(null, Validators.required)
  	});
  }

  onSubmit() {
  	//console.log(this.quizForm.value);
  	this.http.callRecipes(this.quizForm.value.qOne, this.quizForm.value.qTwo, this.quizForm.value.qThree)
  	.subscribe(
  		(data: any) => {
  			this.router.navigate(['/recipes/diet=' + data.params.diet + '&ingr=' + data.params.ingr + '&q=' + data.params.q]);	
  		} 

  	);
  	
  }

}
