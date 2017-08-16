import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'new-recipe',
  template: `
    <h1>New Recipe</h1>
    <div>
      <label>Enter Recipe Title:</label>
      <input #newTitle>
    </div>
    <div>
      <label>Recipe Priority</label>
      <select #newPriority>
        <option [value]="1"> Low Priority </option>
        <option [value]="2"> Medium Priority </option>
        <option [value]="3"> High Priority </option>
      </select>
      <button (click)="submitForm(newTitle.value, newPriority.value); newTitle.value='';">Add</button>
    </div>
  `
})

export class NewRecipeComponent {
  @Output() newRecipeSender = new EventEmitter();

  submitForm(title: string, priority: number) {
    var newRecipeToAdd: Recipe = new Recipe(title, priority);
    this.newRecipeSender.emit(newRecipeToAdd);
  }
}
