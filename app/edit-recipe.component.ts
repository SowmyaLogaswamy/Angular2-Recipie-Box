import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'edit-recipe',
  template: `
    <div>
      <div *ngIf ="childSelectedRecipe">
        <h3>{{childSelectedRecipe.title}}</h3>
        <p>Recipe Finished? {{childSelectedRecipe.done}}</p>
        <hr>
        <h3>Edit Recipe</h3>
        <label>Enter Recipe Title:</label>
        <input [(ngModel)]="childSelectedRecipe.title">
        <label>Select Recipe Priority (1-3):</label>
        <br>
        <input type="radio" [(ngModel)]="childSelectedRecipe.priority" [value]="1">1 (Low Priority)<br>
        <input type="radio" [(ngModel)]="childSelectedRecipe.priority" [value]="2">2 (Medium Priority)<br>
        <input type="radio" [(ngModel)]="childSelectedRecipe.priority" [value]="3">3 (High Priority)
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditRecipeComponent {
  @Input() childSelectedRecipe: Recipe;
  @Output() doneButtonClickedSender = new EventEmitter();


  doneButtonClicked() {
     this.doneButtonClickedSender.emit();
   }
 }
