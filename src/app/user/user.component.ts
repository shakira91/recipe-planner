import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  savedRecipes: any;
  constructor(private shared: SharedService) { }


  ngOnInit() {
  	this.savedRecipes = this.shared.savedRecipes;
  	console.log(this.shared.savedRecipes);
  }

}
