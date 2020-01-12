class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log("beep");
  }
}

const car = new Vehicle("orange");
console.log(car.color);
