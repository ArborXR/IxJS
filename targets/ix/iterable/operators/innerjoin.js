"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.innerJoin = exports.JoinIterable = void 0;
const iterablex_1 = require("../iterablex");
const _grouping_1 = require("./_grouping");
const identity_1 = require("../../util/identity");
class JoinIterable extends iterablex_1.IterableX {
    _outer;
    _inner;
    _outerSelector;
    _innerSelector;
    _resultSelector;
    constructor(outer, inner, outerSelector, innerSelector, resultSelector) {
        super();
        this._outer = outer;
        this._inner = inner;
        this._outerSelector = outerSelector;
        this._innerSelector = innerSelector;
        this._resultSelector = resultSelector;
    }
    *[Symbol.iterator]() {
        const map = (0, _grouping_1.createGrouping)(this._inner, this._innerSelector, identity_1.identity);
        for (const outerElement of this._outer) {
            const outerKey = this._outerSelector(outerElement);
            if (map.has(outerKey)) {
                for (const innerElement of map.get(outerKey)) {
                    yield this._resultSelector(outerElement, innerElement);
                }
            }
        }
    }
}
exports.JoinIterable = JoinIterable;
/**
 * Correlates the elements of two sequences based on matching keys.
 *
 * @template TOuter The type of the elements of the first iterable sequence.
 * @template TInner The type of the elements of the second iterable sequence.
 * @template TKey The type of the keys returned by the key selector functions.
 * @template TResult The type of the result elements.
 * @param {Iterable<TInner>} inner The async-enumerable sequence to join to the first sequence.
 * @param {((value: TOuter) => TKey)} outerSelector A function to extract the join key from each element
 * of the first sequence.
 * @param {((value: TInner) => TKey)} innerSelector A function to extract the join key from each element
 * of the second sequence.
 * @param {((outer: TOuter, inner: TInner) => TResult)} resultSelector A function to create a result element
 * from two matching elements.
 * @returns {OperatorFunction<TOuter, TResult>} An iterable sequence that has elements that are obtained by performing an inner join
 * on two sequences.
 */
function innerJoin(inner, outerSelector, innerSelector, resultSelector) {
    return function innerJoinOperatorFunction(outer) {
        return new JoinIterable(outer, inner, outerSelector, innerSelector, resultSelector);
    };
}
exports.innerJoin = innerJoin;

//# sourceMappingURL=innerjoin.js.map
