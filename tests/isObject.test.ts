import('mocha');

import * as assert from 'assert';
import { isObject } from '../src/index';

describe('is object', () => {
  const testValues = [
    {},
    { hello: 'world' },
    { array: [1, 2, 3] },
    { arrayEmpty: [] },
    { object: {} },
    {
      nested: {
        nestedChild: {
          hello: 'world',
        },
      },
    },
    '{}',
    '{"hello":"world"}',
    '{"array":[1,2,3]}',
    '{"arrayEmpty":[]}',
    '{"object":{}}',
    '{"nested":{"nestedChild":{"hello":"world"}}}',
  ];

  testValues.forEach((value) => {
    it(`${JSON.stringify(value)} should be a object`, () => {
      assert(
        isObject(value),
        `expected "${JSON.stringify(value)}" to be a object`
      );
    });
  });
});

describe('is not a object', () => {
  const testValues = [
    1,
    null,
    undefined,
    '{4}',
    '{"hello":"world"}}',
    [],
    [1, 2, 3],
    '[]',
    '[1,2,3]',
  ];

  testValues.forEach((value) => {
    it(`${JSON.stringify(value)} should not be a object`, () => {
      assert(
        !isObject(value),
        `expected "${JSON.stringify(value)}" to not be a object`
      );
    });
  });
});
