"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ignoreElements = exports.IgnoreElementsAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class IgnoreElementsAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        // eslint-disable-next-line no-empty
        for await (const _ of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
        }
    }
}
exports.IgnoreElementsAsyncIterable = IgnoreElementsAsyncIterable;
/**
 * Ignores all elements in an async-iterable sequence leaving only the termination messages.
 *
 * @template TSource The type of the elements in the source sequence
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator that returns an empty async-iterable sequence
 * that signals termination, successful or exceptional, of the source sequence.
 */
function ignoreElements() {
    return function ignoreElementsOperatorFunction(source) {
        return new IgnoreElementsAsyncIterable(source);
    };
}
exports.ignoreElements = ignoreElements;

//# sourceMappingURL=ignoreelements.js.map
