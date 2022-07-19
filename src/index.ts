/**
 * Check if given value is a string
 *
 * @param {number | string | unknown} value - string
 *
 * @return {boolean} is string
 */
export function isString(value: number | string | unknown): boolean {
  if (typeof value === 'string' || value instanceof String) {
    return true;
  }

  return false;
}

/**
 * Check if given value is a number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is number
 */
export function isNumber(value: number | string | unknown): boolean {
  if (typeof value === 'number') {
    return value - value === 0;
  }

  if (typeof value === 'string' && value.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+value) : isFinite(+value);
  }

  return false;
}

/**
 * Check if given value is a integer number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is integer number
 */
export function isInteger(value: number | string | unknown): boolean {
  if (typeof value === 'number' && isNumber(value)) {
    return (
      (Number.isFinite ? Number.isFinite(value) : isFinite(value)) &&
      Math.floor(value) === value
    );
  }

  if (typeof value === 'string' && value.trim() !== '' && isNumber(value)) {
    return (
      (Number.isFinite ? Number.isFinite(+value) : isFinite(+value)) &&
      Math.floor(+value) === +value
    );
  }

  return false;
}

/**
 * Check if given value is a float number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is float number
 */
export function isFloat(value: number | string | unknown): boolean {
  if (typeof value === 'number') {
    return !!(value % 1);
  }

  if (typeof value === 'string' && value.trim() !== '') {
    return !!(+value % 1);
  }

  return false;
}

/**
 * Check if given value is a even number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is even number
 */
export function isEven(value: number | string | unknown): boolean {
  if (typeof value === 'number' && isNumber(value)) {
    return value % 2 === 0;
  }

  if (typeof value === 'string' && value.trim() !== '' && isNumber(value)) {
    return +value % 2 === 0;
  }

  return false;
}

/**
 * Check if given value is a odd number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is odd number
 */
export function isOdd(value: number | string | unknown): boolean {
  if (typeof value === 'number' && isNumber(value)) {
    return value % 2 !== 0;
  }

  if (typeof value === 'string' && value.trim() !== '' && isNumber(value)) {
    return +value % 2 !== 0;
  }

  return false;
}

/**
 * Check if string is a valid JSON
 *
 * @param {string} str
 *
 * @return {boolean} is valid
 */
function isValidJson(str: string): boolean {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

/**
 * Check if given value is a object
 *
 * @param {any} value - object or object string
 *
 * @return {boolean} is object
 */
export function isObject(value: any): boolean {
  if (typeof value === 'string' && isValidJson(value)) {
    value = JSON.parse(value);
  }

  if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
    return true;
  }

  return false;
}

/**
 * Check if given value is a array
 *
 * @param {any} value - array or array string
 *
 * @return {boolean} is array
 */
export function isArray(value: any): boolean {
  if (typeof value === 'string' && isValidJson(value)) {
    value = JSON.parse(value);
  }

  if (Array.isArray(value) && value !== null) {
    return true;
  }

  return false;
}
