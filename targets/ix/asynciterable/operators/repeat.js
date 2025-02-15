"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeat = exports.RepeatAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class RepeatAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _count;
    constructor(source, count) {
        super();
        this._source = source;
        this._count = count;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        if (this._count === -1) {
            while (1) {
                for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
                    yield item;
                }
            }
        }
        else {
            for (let i = 0; i < this._count; i++) {
                for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
                    yield item;
                }
            }
        }
    }
}
exports.RepeatAsyncIterable = RepeatAsyncIterable;
/**
 * Repeats the async-enumerable sequence a specified number of times.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {number} [count=-1] Number of times to repeat the sequence. If not specified, the sequence repeats indefinitely.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The async-iterable sequence producing the elements of the given sequence repeatedly.
 */
function repeat(count = -1) {
    return function repeatOperatorFunction(source) {
        return new RepeatAsyncIterable(source, count);
    };
}
exports.repeat = repeat;

//# sourceMappingURL=repeat.js.map
