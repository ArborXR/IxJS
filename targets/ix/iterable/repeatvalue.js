"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeatValue = void 0;
const of_1 = require("./of");
const repeat_1 = require("./operators/repeat");
/**
 * Repeats a given value for the specified number of times as an iterable.
 *
 * @template TSource The type of element to repeat.
 * @param {TSource} value The value to repeat as an iterable.
 * @param {number} [count=-1] The number of times to repeat the value, infinite if not specified.
 * @returns {AsyncIterableX<TSource>} An iterable with a single item that is repeated over the specified times.
 */
function repeatValue(value, count = -1) {
    return new repeat_1.RepeatIterable((0, of_1.of)(value), count);
}
exports.repeatValue = repeatValue;

//# sourceMappingURL=repeatvalue.js.map
