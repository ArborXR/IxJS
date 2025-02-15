"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.except = exports.ExceptAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const arrayindexof_1 = require("../../util/arrayindexof");
const comparer_1 = require("../../util/comparer");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class ExceptAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _first;
    _second;
    _comparer;
    constructor(first, second, comparer) {
        super();
        this._first = first;
        this._second = second;
        this._comparer = comparer;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const map = [];
        for await (const secondItem of (0, withabort_1.wrapWithAbort)(this._second, signal)) {
            map.push(secondItem);
        }
        for await (const firstItem of (0, withabort_1.wrapWithAbort)(this._first, signal)) {
            if ((await (0, arrayindexof_1.arrayIndexOfAsync)(map, firstItem, this._comparer)) === -1) {
                map.push(firstItem);
                yield firstItem;
            }
        }
    }
}
exports.ExceptAsyncIterable = ExceptAsyncIterable;
/**
 *  Produces the set difference of two async-iterable sequences by using the specified equality comparer to compare values.
 *
 * @template TSource The type of the elements of the input sequences.
 * @param {AsyncIterable<TSource>} second An async-iterable sequence whose elements that also occur in the
 * operator sequence will cause those elements to be removed from the returned sequence.
 * @param {((x: TSource, y: TSource) => boolean | Promise<boolean>)} [comparer=comparerAsync] An equality comparer to compare values
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator that returns a sequence that contains the set
 * difference of the elements of two sequences.
 */
function except(second, comparer = comparer_1.comparerAsync) {
    return function exceptOperatorFunction(first) {
        return new ExceptAsyncIterable(first, second, comparer);
    };
}
exports.except = except;

//# sourceMappingURL=except.js.map
