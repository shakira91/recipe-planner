import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  quizForm: FormGroup; 

  constructor() { }

  ngOnInit() {
  	this.quizForm = new FormGroup({
  		'qOne' : new FormControl(null, Validators.required),
  		'qTwo' : new FormControl(null, Validators.required),
  		'qThree' : new FormControl(null, Validators.required)
  	});
  }

}
