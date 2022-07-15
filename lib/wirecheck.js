'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
/**
 * Check is given value is a number
 *
 * @param {number | string | unknown} num
 *
 * @return {boolean} is number
 */
function isNumber(num) {
    if (typeof num === 'number') {
        return num - num === 0;
    }
    if (typeof num === 'string' && num.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return false;
}
exports.isNumber = isNumber;
//# sourceMappingURL=wirecheck.js.map
