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
      <li *ngFor="let currentRecipe of childRecipeList | completeness:filterByCompleteness">{{currentRecipe.title}} {{currentRecipe.priority}}
        <input *ngIf="currentRecipe.done === true" type="checkbox" checked (click)="toggleDone(currentRecipe, false)"/>
        <input *ngIf="currentRecipe.done === false" type="checkbox" (click)="toggleDone(currentRecipe, true)"/>
        <button (click)="editButtonHasBeenClicked(currentRecipe)">Edit!</button>
      </li>
    </ul>
  `
})

export class RecipeListComponent {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();
  filterByCompleteness: string = "incompleteRecipes";

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
