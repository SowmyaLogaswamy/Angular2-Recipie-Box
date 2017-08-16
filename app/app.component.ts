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
    new Recipe('French Onion Soup', ['onions', 'some nasty week-old cream'], ['Chop up some stanky onions and cry over the dinner you are about to have.', 'Pour that week-old nasty cream over it.', 'Serve with a side of sadness.'], 1),
    new Recipe('Bean Dip', ['black beans', 'day-old, rancid queso'], ['Microwave these fine ingredients until they burn into a homogenous paste', ' Serve in a small locked room with all your buddies.'], 2),
    new Recipe('Trash Frappe', ['warm pre-made Starbucks frap mix', 'half-congealed whipped cream'], ['Scavenge a thrown out Starbucks cup of frappuccino from trash can.', 'Have a buddy pour it down the top of a gutter for you.', 'Felch the frothy mix out of the bottom of the gutter.'], 3)
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
