import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allRecipes">All Recipes</option>
    <option value="completedRecipes">Completed Recipes</option>
    <option value="incompleteRecipes" selected="selected">Incomplete Recipes</option>
  </select>

  <ul>
    <li (click)="isDone(currentRecipe)" *ngFor="let currentRecipe of childRecipeList | completeness:filterByCompleteness">{{currentRecipe.title}} {{currentRecipe.priority}}
    <input *ngIf="currentRecipe.done === true" type="checkbox" checked (click)="toggleDone(currentRecipe, false)"/>
    <input *ngIf="currentRecipe.done === false" type="checkbox" (click)="toggleDone(currentRecipe, true)"/>
    <button (click)="editButtonHasBeenClicked(currentRecipe)">Edit</button></li>
  </ul>
  `
})

export class RecipeListComponent {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();
  filterByCompleteness: string = "incompleteRecipes";

  isDone(clickedRecipe: Recipe) {
    if(clickedRecipe.done === true) {
      alert("This recipe is done!");
    } else {
      alert("This recipe is not done. Better get to work!");
    }
  }

  priorityColor(currentRecipe){
    if (currentRecipe.priority === 3){
      return "bg-danger";
    } else if (currentRecipe.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  editButtonHasBeenClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  toggleDone(clickedRecipe: Recipe, setCompleteness: boolean) {
     clickedRecipe.done = setCompleteness;
   }
}
