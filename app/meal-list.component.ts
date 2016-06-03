import { EditMealCaloriesComponent } from './edit-meal-calories.component';
import { Component, EventEmitter } from 'angular2/core';
import { NewMealComponent } from './new-meal.component';
import { MealComponent } from './meal.component';
import { CaloriePipe } from './calories.pipe';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [CaloriePipe],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealCaloriesComponent, NewMealComponent],
  template: `
  <new-meal (onSubmitNewMeal)="CreateMeal($event)"></new-meal>
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show all meals</option>
    <option value="high">Show high calorie meals</option>
    <option value="low">Show low calorie meals</option>
  </select>
  <edit-meal-calories *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-calories>
  <meal-display *ngFor="#currentMeal of mealList | calories:filterCalories"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }

  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal)
  }

  CreateMeal(meal: Meal):void {
    meal.id = this.mealList.length;
    this.mealList.push(meal);
    console.log(this.mealList);
  }

  onChange(filterOption){
    this.filterCalories = filterOption;
  }
}
