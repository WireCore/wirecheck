import * as assert from 'assert';
import { isFloat } from '../src/index';

describe('is float', () => {
  const testValues = [0.1, 0.01, '0.1', '0.01', Math.PI];

  testValues.forEach((value) => {
    it(`${JSON.stringify(value)} should be a float number`, () => {
      assert(
        isFloat(value),
        `expected "${String(value)}" to be a float number`
      );
    });
  });
});

describe('is not float', () => {
  const testValues = [
    2,
    10,
    '2',
    '10',
    -2,
    -10,
    '-2',
    '-10',
    0x104,
    '0x104',
    parseInt('2'),
    false,
    true,
  ];

  testValues.forEach((value) => {
    it(`${JSON.stringify(value)} should not be a float number`, () => {
      assert(
        !isFloat(value),
        `expected "${String(value)}" to not be a float number`
      );
    });
  });
});
