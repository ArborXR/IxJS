"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skip = exports.SkipAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class SkipAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _count;
    constructor(source, count) {
        super();
        this._source = source;
        this._count = count;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const source = (0, withabort_1.wrapWithAbort)(this._source, signal);
        const it = source[Symbol.asyncIterator]();
        let count = this._count;
        let next;
        while (count > 0 && !(next = await it.next()).done) {
            count--;
        }
        if (count <= 0) {
            while (!(next = await it.next()).done) {
                yield next.value;
            }
        }
    }
}
exports.SkipAsyncIterable = SkipAsyncIterable;
/**
 * Bypasses a specified number of elements in an async-iterable sequence and then returns the remaining elements.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {number} count The number of elements to skip before returning the remaining elements.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence that contains the elements that
 * occur after the specified index in the input sequence.
 */
function skip(count) {
    return function skipOperatorFunction(source) {
        return new SkipAsyncIterable(source, count);
    };
}
exports.skip = skip;

//# sourceMappingURL=skip.js.map
