"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defer = void 0;
const asynciterablex_1 = require("./asynciterablex");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
class DeferAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _fn;
    constructor(fn) {
        super();
        this._fn = fn;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const items = await this._fn(signal);
        for await (const item of (0, withabort_1.wrapWithAbort)(items, signal)) {
            yield item;
        }
    }
}
/**
 * Returns an async-iterable sequence that invokes the specified factory function whenever a call to [Symbol.asyncIterator] has been made.
 *
 * @template TSource The type of the elements in the sequence returned by the factory function, and in the resulting sequence.
 * @param {((signal?: AbortSignal) => AsyncIterable<TSource> | Promise<AsyncIterable<TSource>>)} factory Async-iterable factory function to
 * invoke for each call to [Symbol.asyncIterator].
 * @returns {AsyncIterableX<TSource>} An async-iterable sequence whose observers trigger an invocation of the given async-iterable factory function.
 */
function defer(factory) {
    return new DeferAsyncIterable(factory);
}
exports.defer = defer;

//# sourceMappingURL=defer.js.map
