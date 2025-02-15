"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeLast = exports.TakeLastAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class TakeLastAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _count;
    constructor(source, count) {
        super();
        this._source = source;
        this._count = count;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        if (this._count > 0) {
            const q = [];
            for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
                if (q.length >= this._count) {
                    q.shift();
                }
                q.push(item);
            }
            while (q.length > 0) {
                yield q.shift();
            }
        }
    }
}
exports.TakeLastAsyncIterable = TakeLastAsyncIterable;
/**
 * Returns a specified number of contiguous elements from the end of an async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {number} count Number of elements to take from the end of the source sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence containing the specified
 * number of elements from the end of the source sequence.
 */
function takeLast(count) {
    return function takeLastOperatorFunction(source) {
        return new TakeLastAsyncIterable(source, count);
    };
}
exports.takeLast = takeLast;

//# sourceMappingURL=takelast.js.map
