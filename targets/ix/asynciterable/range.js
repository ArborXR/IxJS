"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
const asynciterablex_1 = require("./asynciterablex");
const aborterror_1 = require("../aborterror");
class RangeAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _start;
    _count;
    constructor(start, count) {
        super();
        this._start = start;
        this._count = count;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        for (let current = this._start, end = this._start + this._count; current < end; current++) {
            yield current;
        }
    }
}
/**
 * Generates an async-iterable sequence of integral numbers within a specified range.
 *
 * @param {number} start The value of the first integer in the sequence.
 * @param {number} count The number of sequential integers to generate.
 * @returns {AsyncIterableX<number>} An async-iterable sequence that contains a range of sequential integral numbers.
 */
function range(start, count) {
    return new RangeAsyncIterable(start, count);
}
exports.range = range;

//# sourceMappingURL=range.js.map
