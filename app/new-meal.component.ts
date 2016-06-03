import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="container form">
    <input placeholder="Add Name of Food" class="col-xs-5 col-xs-offset-1">
    <button (click)="addMeal()">Enter</button>
  `
})
export class NewMealComponent{
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(){
    going to do something... soon;
  }
}
