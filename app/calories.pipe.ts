import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriePipe implements PipeTransform{
  transform(input: Meal[], args) {
    var calorieCount = args[2];
    if(calorieCount <= "500") {
      return input.filter(function(meal) {
        return meal.name;
      });
    } else if ( calorieCount > "500") {
      return input.filter(function(meal) {
        return meal.name;
      });
    } else {
      return input;
    }
  }
}
