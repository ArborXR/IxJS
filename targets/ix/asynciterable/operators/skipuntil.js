"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipUntil = exports.SkipUntilAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class SkipUntilAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _other;
    constructor(source, other) {
        super();
        this._source = source;
        this._other = other;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let otherDone = false;
        this._other(signal).then(() => (otherDone = true));
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            if (otherDone) {
                yield item;
            }
        }
    }
}
exports.SkipUntilAsyncIterable = SkipUntilAsyncIterable;
/**
 * Returns the elements from the source observable sequence only after the function that returns a promise produces an element.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {(signal?: AbortSignal) => Promise<any>} other A function which returns a promise that triggers propagation
 * of elements of the source sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence containing the elements of the source sequence
 * starting from the point the function that returns a promise triggered propagation.
 */
function skipUntil(other) {
    return function skipUntilOperatorFunction(source) {
        return new SkipUntilAsyncIterable(source, other);
    };
}
exports.skipUntil = skipUntil;

//# sourceMappingURL=skipuntil.js.map
