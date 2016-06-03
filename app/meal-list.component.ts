import { Component, EventEmitter } from 'angular2/core';
import { EditMealCaloriesComponent } from './edit-meal-calories.component';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealCaloriesComponent],
  template: `
  <edit-meal-calories *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-calories>
  <meal-display *ngFor="#currentMeal of mealList"
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
  constructor() {
    this.onMealSelect = new EventEmitter();
  }

  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal)
  }
}
