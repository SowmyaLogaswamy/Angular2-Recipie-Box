import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class = "jumbotron">
      <h1>Recipe-Box</h1>
      <h3>{{subtitle}} done on {{month}}/{{day}}/{{year}}</h3>
    </div>
    <ul>
       <li [class]="priorityColor(currentRecipe)" (click)="isDone(currentRecipe)" *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}
       <button (click)="editRecipe(currentRecipe)">Edit</button></li>
     </ul>

     <hr>
      <div>
       <div *ngIf ="selectedRecipe">
         <h3>{{selectedRecipe.title}}</h3>
         <p>Recipe Finished? {{selectedRecipe.done}}</p>
         <hr>


         <h3>Edit Recipe</h3>
         <label>Enter Recipe Title:</label>
         <input [(ngModel)]="selectedRecipe.title">
         <label>Select Recipe Priority (1-3):</label>
         <br>
         <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="1">1 (Low Priority)<br>
         <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="2">2 (Medium Priority)<br>
         <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="3">3 (High Priority)
         <button (click)="finishedEditing()">Done</button>
         </div>
      </div>
  </div>
  `
})

export class AppComponent {
  subtitle: string = 'Its an Angular Project';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  recipes: Recipe[] = [
    new Recipe('Mushroom cheese dosa', 3),
    new Recipe("Cheese Pasta", 2),
    new Recipe("Chilly Manchurian", 1) ];
  selectedRecipe: null;


  editRecipe(clickedRecipe) {
       this.selectedRecipe = clickedRecipe;
  }

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

  finishedEditing() {
    this.selectedRecipe = null;
  }
}

//Creating a model
export class Recipe {
  public done: boolean = false;
  constructor(public title: string, public priority: number) { }
}
