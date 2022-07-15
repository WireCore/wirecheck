import('mocha');

import * as assert from 'assert';
import { isNumber } from '../src/index';

describe('is number', () => {
  const testValues = [
    0,
    1,
    1.5,
    10,
    10.5,
    100,
    100.5,
    -1,
    -1.5,
    -10,
    -10.5,
    -100,
    -100.5,
    '1',
    '1.5',
    '10',
    '10.5',
    '100',
    '100.5',
    '-1',
    '-1.5',
    '-10',
    '-10.5',
    '-100',
    '-100.5',

    0x88ffff,
    7e4,
    '0x88ffff',
    '7e4',
    '   15\r\n  ',

    '0.0',
    '0x0',
    '0e+5',
    '000',
    '0.0e-5',
    '0.0E5',

    +'',
    +1,
    +3.14,
    +37,
    +5,
    +[],
    +false,
    +Math.LN2,
    +true,
    // @ts-ignore
    +null,
    +new Date(),

    parseInt('1'),
    parseFloat('0.1'),
    Math.abs(1),
    Math.acos(1),
    Math.asin(1),
    Math.atan(1),
    Math.atan2(1, 2),
    Math.ceil(1),
    Math.cos(1),
    Math.E,
    Math.exp(1),
    Math.floor(1),
    Math.LN10,
    Math.LN2,
    Math.log(1),
    Math.LOG10E,
    Math.LOG2E,
    Math.max(1, 2),
    Math.min(1, 2),
    Math.PI,
    Math.pow(1, 2),
    Math.pow(5, 5),
    Math.random(),
    Math.round(1),
    Math.sin(1),
    Math.sqrt(1),
    Math.SQRT1_2,
    Math.SQRT2,
    Math.tan(1),

    Number.MAX_VALUE,
    Number.MIN_VALUE,
  ];

  testValues.forEach((value) => {
    it(`${JSON.stringify(value)} should be a number`, () => {
      assert(isNumber(value), `expected "${String(value)}" to be a number`);
    });
  });
});

describe('is not a number', () => {
  const testValues = [
    '   ',
    '\r\n\t',
    '',
    '',
    '3a',
    'hello',
    'false',
    'null',
    'true',
    'undefined',
    +'abc',
    +/foo/,
    +[1, 2, 4],
    +Infinity,
    +Math.sin,
    +NaN,
    // @ts-ignore
    +undefined,
    +{ a: 1 },
    +{},
    /foo/,
    [1, 2, 3],
    [1],
    [],
    true,
    false,
    +function () {},
    function () {},
    Infinity,
    -Infinity,
    Math.sin,
    NaN,
    new Date(),
    null,
    undefined,
    {},
  ];

  testValues.forEach((value) => {
    it(`${JSON.stringify(value)} should not be a number`, () => {
      assert(
        !isNumber(value),
        `expected "${String(value)}" to not be a number`
      );
    });
  });
});
