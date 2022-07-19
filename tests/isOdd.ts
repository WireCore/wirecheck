import * as assert from 'assert';
import { isOdd } from '../src/index';

describe('is odd', () => {
  const testValues = [
    1,
    11,
    '1',
    '11',
    -1,
    -11,
    '-1',
    '-11',
    0x105,
    '0x105',
    parseInt('-3'),
    0.2,
    '0.2',
  ];

  testValues.forEach((value) => {
    it(`${JSON.stringify(value)} should be a odd number`, () => {
      assert(isOdd(value), `expected "${String(value)}" to be a odd number`);
    });
  });
});

describe('is not odd', () => {
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
    it(`${JSON.stringify(value)} should not be a odd number`, () => {
      assert(
        !isOdd(value),
        `expected "${String(value)}" to not be a odd number`
      );
    });
  });
});
