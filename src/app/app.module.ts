import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import { AppComponent } from './app.component';
import { AuthServiceService } from './auth/auth-service.service';
import { AddRecipeService } from './recipe-list/add-recipe.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-list/recipe-details/recipe-details.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';
import { DeleteRecipeComponent } from './user/delete-recipe/delete-recipe.component';
import { AddUserRecipeComponent } from './user/add-user-recipe/add-user-recipe.component';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    SearchRecipesComponent,
    SignUpComponent,
    SignInComponent,
    UserComponent,
    AuthComponent,
    DeleteRecipeComponent,
    AddUserRecipeComponent
  ],
  imports: [
  	RouterModule.forRoot([
       { path: 'user/:id', component: UserComponent }, 
       { path: 'delete/:id', component: DeleteRecipeComponent },
       { path: 'add/:id', component: AddUserRecipeComponent },
  		 { path: 'recipes', component: RecipeListComponent },
       { path: '', component: AuthComponent },
  	]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    FileUploadModule
  ],
  providers: [
  	AuthServiceService,
    AddRecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
