"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipLast = exports.SkipLastAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class SkipLastAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _count;
    constructor(source, count) {
        super();
        this._source = source;
        this._count = count;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const q = [];
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            q.push(item);
            if (q.length > this._count) {
                yield q.shift();
            }
        }
    }
}
exports.SkipLastAsyncIterable = SkipLastAsyncIterable;
/**
 * Bypasses a specified number of elements at the end of an async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {number} count Number of elements to bypass at the end of the source sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence containing the
 * source sequence elements except for the bypassed ones at the end.
 */
function skipLast(count) {
    return function skipLastOperatorFunction(source) {
        return new SkipLastAsyncIterable(source, count);
    };
}
exports.skipLast = skipLast;

//# sourceMappingURL=skiplast.js.map
