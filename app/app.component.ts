import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class = "jumbotron">
      <h1>Recipe-Box</h1>
      <h3>{{subtitle}} done on {{month}}/{{day}}/{{year}}</h3>
    </div>

    <recipe-list [childRecipeList]="masterRecipeList" (clickSender)="editRecipe($event)"></recipe-list>

     <hr>
     <edit-recipe [childSelectedRecipe]="selectedRecipe" (doneButtonClickedSender)="finishedEditing()"></edit-recipe>
     <new-recipe (newRecipeSender)="addRecipe($event)"></new-recipe>
  </div>
  `
})

export class AppComponent {
  subtitle: string = 'Its an Angular Project';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedRecipe = null;

  masterRecipeList: Recipe[] = [
    new Recipe('Mushroom cheese dosa', 3),
    new Recipe("Cheese Pasta", 2),
    new Recipe("Chilly Manchurian", 1)
  ];


  editRecipe(clickedRecipe) {
       this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  addRecipe(newRecipeFromChild: Recipe) {
    this.masterRecipeList.push(newRecipeFromChild);
  }
}

//Creating a model
