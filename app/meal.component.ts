import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <h1>{{meal.calories}}</h1>
  `
})
export class MealComponent{
  public meal: Meal;
}
