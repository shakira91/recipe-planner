import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import { AppComponent } from './app.component';
import { AuthServiceService } from './auth/auth-service.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-list/recipe-details/recipe-details.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    SearchRecipesComponent,
    SignUpComponent,
    SignInComponent,
    UserComponent
  ],
  imports: [
  	RouterModule.forRoot([
       { path: 'user', component: UserComponent },     
  		 { path: 'recipes/:id', component: RecipeListComponent },
  		 { path: 'signup', component: SignUpComponent },
       { path: '', component: SignInComponent },
  	]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
  	AuthServiceService 	
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
