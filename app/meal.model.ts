export class Meal{
  public calorieScale: boolean = false;
  constructor(public name: string, public details: string, public calories: string, public id: number) {
    if(parseInt(this.calories) <= 500) {
      this.calorieScale = true;
    } else if (parseInt(this.calories) > 500) {
      this.calorieScale = false;
    } else {
      this.calorieScale = false
    }
    console.log(this.calorieScale);
  }
}
