const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for inputs 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should handle negative numbers correctly', () => {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for inputs 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should handle negative numbers correctly', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for inputs 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should handle negative division correctly', () => {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
    });

    it('should return "Error" when rounded divisor is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });
  });
});
