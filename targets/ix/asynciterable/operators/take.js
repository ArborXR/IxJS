"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.take = exports.TakeAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class TakeAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _count;
    constructor(source, count) {
        super();
        this._source = source;
        this._count = count;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let i = this._count;
        if (i > 0) {
            for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
                yield item;
                if (--i === 0) {
                    break;
                }
            }
        }
    }
}
exports.TakeAsyncIterable = TakeAsyncIterable;
/**
 * Returns a specified number of contiguous elements from the start of an async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {number} count The number of elements to return.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence that contains the specified
 * number of elements from the start of the input sequence.
 */
function take(count) {
    return function takeOperatorFunction(source) {
        return new TakeAsyncIterable(source, count);
    };
}
exports.take = take;

//# sourceMappingURL=take.js.map
