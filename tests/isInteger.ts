import * as assert from 'assert';
import { isInteger } from '../src/index';

describe('is integer', () => {
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
  ];

  testValues.forEach((value) => {
    it(`${JSON.stringify(value)} should be a integer number`, () => {
      assert(
        isInteger(value),
        `expected "${String(value)}" to be a integer number`
      );
    });
  });
});

describe('is not integer', () => {
  const testValues = [false, true, 0.1, 0.01, '0.1', '0.01', Math.PI];

  testValues.forEach((value) => {
    it(`${JSON.stringify(value)} should not be a integer number`, () => {
      assert(
        !isInteger(value),
        `expected "${String(value)}" to not be a integer number`
      );
    });
  });
});
