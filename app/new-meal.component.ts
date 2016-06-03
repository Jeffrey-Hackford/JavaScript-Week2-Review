import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="container form">
    <input placeholder="Add Name of Food" class="col-xs-5 col-xs-offset-2" #MealName>
    <input placeholder="Add Details of Food" class="col-xs-5 col-xs-offset-2" #MealDetails>
    <input placeholder="Add Calories of Food" class="col-xs-5 col-xs-offset-2" #MealCalories>
    <button (click)="addMeal(MealName, MealDetails, MealCalories)" class="btn-info">Enter</button>
  </div>
  `
})
export class NewMealComponent{
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(Name: HTMLInputElement, Details: HTMLInputElement, Calories: HTMLInputElement){
    var newMeal = new Meal(Name.value, Details.value, Calories.value, 0);
    this.onSubmitNewMeal.emit(newMeal);
    Name.value = '';
    Details.value = '';
    Calories.value = '';
  }
}
