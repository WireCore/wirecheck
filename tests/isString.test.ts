import('mocha');

import * as assert from 'assert';
import { isString } from '../src/index';

describe('is string', () => {
  const testValues = [
    '',
    'hello',
    `number ${1}`,
    parseInt('5').toString(),
    [].toString(),
    [1, 2, 3].toString(),
    [1, 2, 3].join('-'),
  ];

  testValues.forEach((value) => {
    it(`${JSON.stringify(value)} should be a string`, () => {
      assert(
        isString(value),
        `expected "${JSON.stringify(value)}" to be a string`
      );
    });
  });
});

describe('is not a string', () => {
  const testValues = [
    1,
    null,
    undefined,
    [],
    [1, 2, 3],
    parseInt('5'),
    true,
    /foo/,
  ];

  testValues.forEach((value) => {
    it(`${JSON.stringify(value)} should not be a string`, () => {
      assert(
        !isString(value),
        `expected "${JSON.stringify(value)}" to not be a string`
      );
    });
  });
});
