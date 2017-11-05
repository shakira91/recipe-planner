import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { HttpService } from './shared/http.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    RecipeListComponent
  ],
  imports: [
  	RouterModule.forRoot([
  		 { path: 'recipes/:id', component: RecipeListComponent },
  		 { path: '', component: QuestionsComponent }
  	]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
  	HttpService 	
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
