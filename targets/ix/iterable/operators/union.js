"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.union = exports.UnionIterable = void 0;
const iterablex_1 = require("../iterablex");
const arrayindexof_1 = require("../../util/arrayindexof");
const comparer_1 = require("../../util/comparer");
class UnionIterable extends iterablex_1.IterableX {
    _left;
    _right;
    _comparer;
    constructor(left, right, comparer) {
        super();
        this._left = left;
        this._right = right;
        this._comparer = comparer;
    }
    *[Symbol.iterator]() {
        const map = [];
        for (const lItem of this._left) {
            if ((0, arrayindexof_1.arrayIndexOf)(map, lItem, this._comparer) === -1) {
                map.push(lItem);
                yield lItem;
            }
        }
        for (const rItem of this._right) {
            if ((0, arrayindexof_1.arrayIndexOf)(map, rItem, this._comparer) === -1) {
                map.push(rItem);
                yield rItem;
            }
        }
    }
}
exports.UnionIterable = UnionIterable;
/**
 * Produces the set union of two sequences by using the given equality comparer.
 *
 * @template TSource The type of the elements of the input sequences.
 * @param {AsyncIterable<TSource>} right An iterable sequence whose distinct elements form the second set for the union.
 * @param {((x: TSource, y: TSource) => boolean)} [comparer=defaultComparer] The equality comparer to compare values.
 * @returns {MonoTypeOperatorFunction<TSource>} An iterable sequence that contains the elements from both input sequences,
 * excluding duplicates.
 */
function union(right, comparer = comparer_1.comparer) {
    return function unionOperatorFunction(left) {
        return new UnionIterable(left, right, comparer);
    };
}
exports.union = union;

//# sourceMappingURL=union.js.map
