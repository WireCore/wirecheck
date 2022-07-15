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
