const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for inputs 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should handle negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for inputs 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should handle negative numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for inputs 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should handle negative division correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
    });

    it('should return "Error" when rounded divisor is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
    });
  });
});
