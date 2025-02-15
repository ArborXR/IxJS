"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersect = exports.IntersectIterable = void 0;
const iterablex_1 = require("../iterablex");
const arrayindexof_1 = require("../../util/arrayindexof");
const comparer_1 = require("../../util/comparer");
function arrayRemove(array, item, comparer) {
    const idx = (0, arrayindexof_1.arrayIndexOf)(array, item, comparer);
    if (idx === -1) {
        return false;
    }
    array.splice(idx, 1);
    return true;
}
class IntersectIterable extends iterablex_1.IterableX {
    _first;
    _second;
    _comparer;
    constructor(first, second, comparer) {
        super();
        this._first = first;
        this._second = second;
        this._comparer = comparer;
    }
    *[Symbol.iterator]() {
        const map = [];
        for (const secondItem of this._second) {
            map.push(secondItem);
        }
        for (const firstItem of this._first) {
            if (arrayRemove(map, firstItem, this._comparer)) {
                yield firstItem;
            }
        }
    }
}
exports.IntersectIterable = IntersectIterable;
/**
 * Produces the set intersection of two iterable sequences.
 *
 * @template TSource The type of the elements of the input sequences.
 * @param {Iterable<TSource>} second An iterable sequence whose distinct elements that also
 * appear in the first sequence will be returned.
 * @param {((x: TSource, y: TSource) => boolean)} [comparer=defaultComparer] An equality comparer to compare values.
 * @returns {MonoTypeOperatorFunction<TSource>} An operator that returns a sequence that contains the elements that form the set
 * intersection of two sequences.
 */
function intersect(second, comparer = comparer_1.comparer) {
    return function intersectOperatorFunction(first) {
        return new IntersectIterable(first, second, comparer);
    };
}
exports.intersect = intersect;

//# sourceMappingURL=intersect.js.map
