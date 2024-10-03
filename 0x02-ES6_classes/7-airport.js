export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Override the default toString() method to include the class name and airport code
  toString() {
    return `Airport [${this._code}]`;
  }
}
