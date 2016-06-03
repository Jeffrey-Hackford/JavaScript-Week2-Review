import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriePipe implements PipeTransform{
  transform(input: Meal[], args) {
    var calorieCount = args[0];
    if(calorieCount === "low") {
      return input.filter((meal) => {
        return meal.calorieScale;
      });
    } else if ( calorieCount === "high") {
      return input.filter((meal) => {
        return !meal.calorieScale;
      });
    } else {
      return input;
    }
  }
}
