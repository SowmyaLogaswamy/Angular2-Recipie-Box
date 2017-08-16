import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="0" selected="selected">All Recipes</option>
      <option value="1">1 rated Recipes</option>
      <option value="2">2 rated Recipes</option>
      <option value="3">3 rated Recipes</option>
    </select>
    <ul class="list-group">
      <li class="list-group-item list-group-item-info"*ngFor="let currentRecipe of childRecipeList | ratedness:filterByRatedness">{{currentRecipe.title}} <span class="badge">Rating: {{currentRecipe.rating}}</span>

        <ol class="list-group">
          <h5>Ingredients</h5>
          <li class="list-group-item list-group-item-success" *ngFor="let currentIngredient of currentRecipe.ingredients">
          {{currentIngredient}}
          </li>
        </ol>
        <ol>
          <h5>Directions</h5>
          <li class="list-group-item" *ngFor="let currentDirection of currentRecipe.directions">
          {{currentDirection}}
          </li>
        </ol>
        <!--
        <div class="checkbox">
          <input *ngIf="currentRecipe.done === true" type="checkbox" checked (click)="toggleDone(currentRecipe, false)"/>
          <input *ngIf="currentRecipe.done === false" type="checkbox" (click)="toggleDone(currentRecipe, true)"/>

        </div>
        -->
        <button type="button" class="btn" (click)="editButtonHasBeenClicked(currentRecipe)">Edit!</button>
      </li>
    </ul>
  `
})

export class RecipeListComponent {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();
  filterByRatedness: string = "allRecipes";

  editButtonHasBeenClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByRatedness = optionFromMenu;
  }

  // toggleDone(clickedRecipe: Recipe, setCompleteness: boolean) {
  //    clickedRecipe.done = setCompleteness;
  //  }
}
