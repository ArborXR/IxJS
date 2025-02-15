"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = exports.FilterAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class FilterAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _predicate;
    _thisArg;
    constructor(source, predicate, thisArg) {
        super();
        this._source = source;
        this._predicate = predicate;
        this._thisArg = thisArg;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let i = 0;
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            if (await this._predicate.call(this._thisArg, item, i++)) {
                yield item;
            }
        }
    }
}
exports.FilterAsyncIterable = FilterAsyncIterable;
/**
 * Filters the elements of an async-iterable sequence based on a predicate.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {((value: TSource, index: number, signal?: AbortSignal) => boolean | Promise<boolean>)} predicate A function to test each source element
 * for a condition.
 * @param {*} [thisArg] Optional this for binding.
 * @returns {OperatorAsyncFunction<TSource, TSource>} An operator which returns an async-iterable
 * sequence that contains elements from the input sequence that satisfy the condition.
 */
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return new FilterAsyncIterable(source, predicate, thisArg);
    };
}
exports.filter = filter;

//# sourceMappingURL=filter.js.map
