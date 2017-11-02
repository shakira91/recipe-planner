import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  quizForm: FormGroup; 

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
  	this.quizForm = new FormGroup({
  		'qOne' : new FormControl(null, Validators.required),
  		'qTwo' : new FormControl(null, Validators.required),
  		'qThree' : new FormControl(null, Validators.required)
  	});
  }

  onSubmit() {
  	//console.log(this.quizForm.value);
  	this.http.sendRequest(this.quizForm.value.qOne, this.quizForm.value.qTwo, this.quizForm.value.qThree);
  	this.router.navigate(['/recipes']);
  }

}
