/**
 * Check if given value is a string
 *
 * @param {number | string | unknown} value - string
 *
 * @return {boolean} is string
 */
declare function isString(value: number | string | unknown): boolean;
/**
 * Check if given value is a number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is number
 */
declare function isNumber(value: number | string | unknown): boolean;
/**
 * Check if given value is a integer number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is integer number
 */
declare function isInteger(value: number | string | unknown): boolean;
/**
 * Check if given value is a float number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is float number
 */
declare function isFloat(value: number | string | unknown): boolean;
/**
 * Check if given value is a even number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is even number
 */
declare function isEven(value: number | string | unknown): boolean;
/**
 * Check if given value is a odd number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is odd number
 */
declare function isOdd(value: number | string | unknown): boolean;
/**
 * Check if given value is a object
 *
 * @param {any} value - object or object string
 *
 * @return {boolean} is object
 */
declare function isObject(value: any): boolean;
/**
 * Check if given value is a array
 *
 * @param {any} value - array or array string
 *
 * @return {boolean} is array
 */
declare function isArray(value: any): boolean;

export { isArray, isEven, isFloat, isInteger, isNumber, isObject, isOdd, isString };
