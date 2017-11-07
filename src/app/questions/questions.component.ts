import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  quizForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.quizForm = new FormGroup({
  		'qOne' : new FormControl(null, Validators.required),
  		'qTwo' : new FormControl(null, Validators.required),
  		'qThree' : new FormControl(null, Validators.required)
  	});
  }

  onSubmit() {
	this.router.navigate(['/recipes/diet=' + this.quizForm.value.qOne + '&ingr=' + this.quizForm.value.qTwo + '&q=' + this.quizForm.value.qThree]);	
  }

}
