"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endWith = exports.EndWithAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class EndWithAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _args;
    constructor(source, args) {
        super();
        this._source = source;
        this._args = args;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            yield item;
        }
        for (const x of this._args) {
            yield x;
        }
    }
}
exports.EndWithAsyncIterable = EndWithAsyncIterable;
/**
 * Append values to an async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {...TSource[]} args The values to append to the end of the async-iterable sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator which appends values to the end of the sequence.
 */
function endWith(...args) {
    return function endsWithOperatorFunction(source) {
        return new EndWithAsyncIterable(source, args);
    };
}
exports.endWith = endWith;

//# sourceMappingURL=endwith.js.map
