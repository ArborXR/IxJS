"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = exports.ReverseAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class ReverseAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const results = [];
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            results.unshift(item);
        }
        yield* results;
    }
}
exports.ReverseAsyncIterable = ReverseAsyncIterable;
/**
 * Reverses the async-iterable instance.
 *
 * @template TSource The type of the elements in the source sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The async-iterable in reversed sequence.
 */
function reverse() {
    return function reverseOperatorFunction(source) {
        return new ReverseAsyncIterable(source);
    };
}
exports.reverse = reverse;

//# sourceMappingURL=reverse.js.map
