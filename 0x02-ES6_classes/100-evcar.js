import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class constructor
    this._range = range; // Store the range attribute
  }

  // Override the cloneCar method
  cloneCar() {
    // Return a new instance of Car instead of EVCar
    return new Car(this._brand, this._motor, this._color);
  }

  // Optional: toString method for EVCar
  toString() {
    return `EVCar { brand: ${this._brand}, motor: ${this._motor}, color: ${this._color}, range: ${this._range} }`;
  }
}
