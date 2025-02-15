"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.except = exports.ExceptIterable = void 0;
const iterablex_1 = require("../iterablex");
const arrayindexof_1 = require("../../util/arrayindexof");
const comparer_1 = require("../../util/comparer");
class ExceptIterable extends iterablex_1.IterableX {
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
            if ((0, arrayindexof_1.arrayIndexOf)(map, firstItem, this._comparer) === -1) {
                map.push(firstItem);
                yield firstItem;
            }
        }
    }
}
exports.ExceptIterable = ExceptIterable;
/**
 *  Produces the set difference of two iterable sequences by using the specified equality comparer to compare values.
 *
 * @template TSource The type of the elements of the input sequences.
 * @param {Iterable<TSource>} second An iterable sequence whose elements that also occur in the
 * operator sequence will cause those elements to be removed from the returned sequence.
 * @param {((x: TSource, y: TSource) => boolean} [comparer=defaultComparer] An equality comparer to compare values
 * @returns {MonoTypeOperatorFunction<TSource>} An operator that returns a sequence that contains the set
 * difference of the elements of two sequences.
 */
function except(second, comparer = comparer_1.comparer) {
    return function exceptOperatorFunction(first) {
        return new ExceptIterable(first, second, comparer);
    };
}
exports.except = except;

//# sourceMappingURL=except.js.map
