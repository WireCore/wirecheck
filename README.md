<p align="center">
  <a href="https://github.com/WireCore/wirecheck">
    <img src="https://wirecore.net/img/svg/logo.svg" alt="Bootstrap logo" width="200" height="165" />
  </a>
</p>

<h2 align="center">WireCheck</h2>

Fast and easy JavaScript type checking for Strings, Numbers, Objects and Arrays.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save wirecheck
```

## Usage

### isString

```javascript
import { isString } from 'wirecheck';

// True
isString('');
isString('hello');
isString(`number ${1}`);
isString([1, 2, 3].join('-'));

// False
isString(1);
isString(null);
isString(undefined);
isString(true);
```

### isNumber

```javascript
import { isNumber } from 'wirecheck';

// True
isNumber(1);
isNumber(1.1);
isNumber(0x88ffff);
isNumber('-10');

// False
isNumber(true);
isNumber(Infinity);
isNumber('hello');
isNumber([1, 2, 4]);
```

### isObject

```javascript
import { isObject } from 'wirecheck';

// True
isObject({});
isObject({ hello: 'world' });
isObject('{"array":[1,2,3]}');
isObject('{"nested":{"nestedChild":{"hello":"world"}}}');

// False
isObject(1);
isObject(null);
isObject('{"hello":"world"}}');
isObject([1, 2, 4]);
```

### isArray

```javascript
import { isArray } from 'wirecheck';

// True
isArray([]);
isArray([1, 2, 3]);
isArray([undefined, null, undefined]);
isArray([[[[[]], [[]]], [[[], [[[[[[], [[[]]]]]]]]]]]]);

// False
isArray(1);
isArray(null);
isArray({ hello: 'world' });
isArray('[[]');
```

## Contributing

Issues, Pull Requests and Stars are welcome. For feature requests or bugs please open a [new issue](https://github.com/WireCore/wirecheck/issues/new/choose)

## License

Copyright © 2022, [WireCore](https://github.com/wirecore).
Released under the [MIT License](LICENSE).
