import { Meal } from './meal.model';
import { Component } from 'angular2/core';

@Component({
  selector: 'edit-meal-calories',
  inputs: ['meal'],
  template: `
  <input ([ngModel])="meal.calories" placeholder="Edit Calories:"/>
  `
})

export class EditMealCaloriesComponent {
  public meal: Meal;
}
