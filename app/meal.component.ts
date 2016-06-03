import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <h1>{{meal.name}}</h1><h2>{{meal.details}}</h2><h3>{{meal.calories}}</h3>
  `
})
export class MealComponent{
  public meal: Meal;
}
