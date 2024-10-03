export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  cloneCar() {
    // Return a new instance of Car using the current attributes
    return new Car(this._brand, this._motor, this._color);
  }

  // Optional: If you want to see the attributes in a string format
  toString() {
    return `Car { brand: ${this._brand}, motor: ${this._motor}, color: ${this._color} }`;
  }
}
