import('mocha');

import * as assert from 'assert';
import { isArray } from '../src/index';

describe('is array', () => {
  const testValues = [
    [],
    [1, 2, 3],
    [{}],
    [{ hello: 'world' }],
    [undefined, null, undefined],
    ['hello', 1, true],
    [[[[[]], [[]]], [[[], [[[[[[], [[[]]]]]]]]]]]],
  ];

  testValues.forEach((value) => {
    it(`${JSON.stringify(value)} should be a array`, () => {
      assert(
        isArray(value),
        `expected "${JSON.stringify(value)}" to be a array`
      );
    });
  });
});

describe('is not a array', () => {
  const testValues = [
    1,
    null,
    undefined,
    '{4}',
    '{"hello":"world"}}',
    '[[]',
    {},
    { hello: 'world' },
  ];

  testValues.forEach((value) => {
    it(`${JSON.stringify(value)} should not be a array`, () => {
      assert(
        !isArray(value),
        `expected "${JSON.stringify(value)}" to not be a array`
      );
    });
  });
});
