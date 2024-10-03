// 7-airport.js
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Override the toString method for the class instance
  toString() {
    return `[object ${this._code}]`;
  }

  // Override the toJSON method to control how the object is displayed
  toJSON() {
    return `Airport [${this._code}]`;
  }
}

// Override the default value of Object.prototype.toString
Object.defineProperty(Airport.prototype, 'toString', {
  value: function () {
    return `Airport [${this._code}]`;
  }
});
