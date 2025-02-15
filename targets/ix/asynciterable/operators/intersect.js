"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersect = exports.IntersectAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const arrayindexof_1 = require("../../util/arrayindexof");
const comparer_1 = require("../../util/comparer");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
async function arrayRemove(array, item, comparer, signal) {
    (0, aborterror_1.throwIfAborted)(signal);
    const idx = await (0, arrayindexof_1.arrayIndexOfAsync)(array, item, comparer);
    if (idx === -1) {
        return false;
    }
    array.splice(idx, 1);
    return true;
}
class IntersectAsyncIterable extends asynciterablex_1.AsyncIterableX {
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
        const map = [];
        for await (const secondItem of (0, withabort_1.wrapWithAbort)(this._second, signal)) {
            map.push(secondItem);
        }
        for await (const firstItem of (0, withabort_1.wrapWithAbort)(this._first, signal)) {
            if (await arrayRemove(map, firstItem, this._comparer, signal)) {
                yield firstItem;
            }
        }
    }
}
exports.IntersectAsyncIterable = IntersectAsyncIterable;
/**
 * Produces the set intersection of two async-iterable sequences.
 *
 * @template TSource The type of the elements of the input sequences.
 * @param {AsyncIterable<TSource>} second An async-iterable sequence whose distinct elements that also
 * appear in the first sequence will be returned.
 * @param {((x: TSource, y: TSource) => boolean | Promise<boolean>)} [comparer=comparerAsync] An equality comparer to compare values.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator that returns a sequence that contains the elements that form the set
 * intersection of two sequences.
 */
function intersect(second, comparer = comparer_1.comparerAsync) {
    return function intersectOperatorFunction(first) {
        return new IntersectAsyncIterable(first, second, comparer);
    };
}
exports.intersect = intersect;

//# sourceMappingURL=intersect.js.map
