'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = exports.isObject = exports.isOdd = exports.isEven = exports.isFloat = exports.isInteger = exports.isNumber = exports.isString = void 0;
/**
 * Check if given value is a string
 *
 * @param {number | string | unknown} value - string
 *
 * @return {boolean} is string
 */
function isString(value) {
    if (typeof value === 'string' || value instanceof String) {
        return true;
    }
    return false;
}
exports.isString = isString;
/**
 * Check if given value is a number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is number
 */
function isNumber(value) {
    if (typeof value === 'number') {
        return value - value === 0;
    }
    if (typeof value === 'string' && value.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+value) : isFinite(+value);
    }
    return false;
}
exports.isNumber = isNumber;
/**
 * Check if given value is a integer number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is integer number
 */
function isInteger(value) {
    if (typeof value === 'number' && isNumber(value)) {
        return ((Number.isFinite ? Number.isFinite(value) : isFinite(value)) &&
            Math.floor(value) === value);
    }
    if (typeof value === 'string' && value.trim() !== '' && isNumber(value)) {
        return ((Number.isFinite ? Number.isFinite(+value) : isFinite(+value)) &&
            Math.floor(+value) === +value);
    }
    return false;
}
exports.isInteger = isInteger;
/**
 * Check if given value is a float number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is float number
 */
function isFloat(value) {
    if (typeof value === 'number') {
        return !!(value % 1);
    }
    if (typeof value === 'string' && value.trim() !== '') {
        return !!(+value % 1);
    }
    return false;
}
exports.isFloat = isFloat;
/**
 * Check if given value is a even number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is even number
 */
function isEven(value) {
    if (typeof value === 'number' && isNumber(value)) {
        return value % 2 === 0;
    }
    if (typeof value === 'string' && value.trim() !== '' && isNumber(value)) {
        return +value % 2 === 0;
    }
    return false;
}
exports.isEven = isEven;
/**
 * Check if given value is a odd number
 *
 * @param {number | string | unknown} value - number
 *
 * @return {boolean} is odd number
 */
function isOdd(value) {
    if (typeof value === 'number' && isNumber(value)) {
        return value % 2 !== 0;
    }
    if (typeof value === 'string' && value.trim() !== '' && isNumber(value)) {
        return +value % 2 !== 0;
    }
    return false;
}
exports.isOdd = isOdd;
/**
 * Check if string is a valid JSON
 *
 * @param {string} str
 *
 * @return {boolean} is valid
 */
function isValidJson(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
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
function isObject(value) {
    if (typeof value === 'string' && isValidJson(value)) {
        value = JSON.parse(value);
    }
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        return true;
    }
    return false;
}
exports.isObject = isObject;
/**
 * Check if given value is a array
 *
 * @param {any} value - array or array string
 *
 * @return {boolean} is array
 */
function isArray(value) {
    if (typeof value === 'string' && isValidJson(value)) {
        value = JSON.parse(value);
    }
    if (Array.isArray(value) && value !== null) {
        return true;
    }
    return false;
}
exports.isArray = isArray;
//# sourceMappingURL=wirecheck.js.map
