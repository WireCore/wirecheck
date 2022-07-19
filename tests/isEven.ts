import * as assert from 'assert';
import { isEven } from '../src/index';

describe('is even', () => {
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
    it(`${JSON.stringify(value)} should be a even number`, () => {
      assert(isEven(value), `expected "${String(value)}" to be a even number`);
    });
  });
});

describe('is not even', () => {
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
    it(`${JSON.stringify(value)} should not be a even number`, () => {
      assert(
        !isEven(value),
        `expected "${String(value)}" to not be a even number`
      );
    });
  });
});
