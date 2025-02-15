"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeatValue = exports.RepeatValueAsyncIterable = void 0;
const asynciterablex_1 = require("./asynciterablex");
const aborterror_1 = require("../aborterror");
class RepeatValueAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _value;
    _count;
    constructor(value, count) {
        super();
        this._value = value;
        this._count = count;
    }
    async *[Symbol.asyncIterator](signal) {
        if (this._count === -1) {
            while (1) {
                (0, aborterror_1.throwIfAborted)(signal);
                yield this._value;
            }
        }
        else {
            for (let i = 0; i < this._count; i++) {
                (0, aborterror_1.throwIfAborted)(signal);
                yield this._value;
            }
        }
    }
}
exports.RepeatValueAsyncIterable = RepeatValueAsyncIterable;
/**
 * Repeats a given value for the specified number of times as an async-iterable.
 *
 * @template TSource The type of element to repeat.
 * @param {TSource} value The value to repeat as an async-iterable.
 * @param {number} [count=-1] The number of times to repeat the value, infinite if not specified.
 * @returns {AsyncIterableX<TSource>} An async-iterable with a single item that is repeated over the specified times.
 */
function repeatValue(value, count = -1) {
    return new RepeatValueAsyncIterable(value, count);
}
exports.repeatValue = repeatValue;

//# sourceMappingURL=repeatvalue.js.map
