import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'new-recipe',
  template: `
    <h1>New Recipe</h1>
    <div>
      <label>Enter Recipe Title:</label>
      <input #newTitle>
      <label>Enter Recipe Ingredients (only one for now):</label>
      <input #newIngredients>
      <label>Enter Recipe Directions (only one for now)</label>
      <input #newDirections>
    </div>
    <div>
      <label>Recipe Rating</label>
      <select #newRating>
        <option [value]="1">Rating: 1</option>
        <option [value]="2">Rating: 2</option>
        <option [value]="3">Rating: 3</option>
      </select>
      <button (click)="submitForm(newTitle.value, newIngredients.value, newDirections.value, newRating.value); newTitle.value=''; newIngredients.value=''; newDirections.value='';">Add</button>
    </div>
  `
})

export class NewRecipeComponent {
  @Output() newRecipeSender = new EventEmitter();

  submitForm(title: string, ingredients: string, directions: string, rating: string) {
    var ingredientsArray = ingredients.split(",");
    var directionsArray = directions.split(",");
    for (var i = 0; i < ingredientsArray.length; i++)
    ingredientsArray[i] = ingredientsArray[i].trim();
    for (var j = 0; j < directionsArray.length; j++)
    directionsArray[j] = directionsArray[j].trim();

    var ratingNumber = parseInt(rating);

    var newRecipeToAdd: Recipe = new Recipe(title, ingredientsArray, directionsArray, ratingNumber);
    console.log (newRecipeToAdd);
    this.newRecipeSender.emit(newRecipeToAdd);
  }
}
