import { Meal } from './meal.model';
import { Component } from 'angular2/core';

@Component({
  selector: 'edit-meal-calories',
  inputs: ['meal'],
  template: `
  <h4>Edit Calories: {{meal.calories}}</h4>
  `
})

export class EditMealCalories {
  public meal: Meal;
}
