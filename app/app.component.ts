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
       <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}</li>
     </ul>
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
    new Recipe('Mushroom cheese dosa'),
    new Recipe("Mushroom cheese dosa"),
    new Recipe("Mushroom cheese dosa"),
  ];
}

//Creating a model
export class Recipe {
  public done: boolean = false;
  constructor(public title: string) { }
}
