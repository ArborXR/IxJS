"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.union = exports.UnionAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const arrayindexof_1 = require("../../util/arrayindexof");
const comparer_1 = require("../../util/comparer");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class UnionAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _left;
    _right;
    _comparer;
    constructor(left, right, comparer) {
        super();
        this._left = left;
        this._right = right;
        this._comparer = comparer;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const map = [];
        for await (const lItem of (0, withabort_1.wrapWithAbort)(this._left, signal)) {
            if ((await (0, arrayindexof_1.arrayIndexOfAsync)(map, lItem, this._comparer)) === -1) {
                map.push(lItem);
                yield lItem;
            }
        }
        for await (const rItem of (0, withabort_1.wrapWithAbort)(this._right, signal)) {
            if ((await (0, arrayindexof_1.arrayIndexOfAsync)(map, rItem, this._comparer)) === -1) {
                map.push(rItem);
                yield rItem;
            }
        }
    }
}
exports.UnionAsyncIterable = UnionAsyncIterable;
/**
 * Produces the set union of two sequences by using the given equality comparer.
 *
 * @template TSource The type of the elements of the input sequences.
 * @param {AsyncIterable<TSource>} right An async-iterable sequence whose distinct elements form the second set for the union.
 * @param {((x: TSource, y: TSource) => boolean | Promise<boolean>)} [comparer=comparerAsync] The equality comparer to compare values.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence that contains the elements from both input sequences,
 * excluding duplicates.
 */
function union(right, comparer = comparer_1.comparerAsync) {
    return function unionOperatorFunction(left) {
        return new UnionAsyncIterable(left, right, comparer);
    };
}
exports.union = union;

//# sourceMappingURL=union.js.map
