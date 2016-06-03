import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1 class="jumbotron">Welcome to Meal Tracker</h1>
    <meal-list [mealList]="meals" (onMealSelect)="mealWasSelected($event)"></meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Spaghetti", "Delicious carbs", "500", 0),
      new Meal("Chicken", "BBQ Grilled", "100", 0)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal, 'parent');
  }

}
