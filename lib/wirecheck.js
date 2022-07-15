'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = exports.isObject = exports.isNumber = exports.isString = void 0;
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
