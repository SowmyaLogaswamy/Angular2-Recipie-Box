import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class = "jumbotron">
      <h1>Recipie-Box</h1>
      <h3>{{subtitle}} done on {{month}}/{{day}}/{{year}}</h3>
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

}
