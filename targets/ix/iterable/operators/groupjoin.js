"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupJoin = exports.GroupJoinIterable = void 0;
const iterablex_1 = require("../iterablex");
const _grouping_1 = require("./_grouping");
const empty_1 = require("../empty");
const identity_1 = require("../../util/identity");
class GroupJoinIterable extends iterablex_1.IterableX {
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
            const innerElements = map.has(outerKey) ? map.get(outerKey) : (0, empty_1.empty)();
            yield this._resultSelector(outerElement, innerElements);
        }
    }
}
exports.GroupJoinIterable = GroupJoinIterable;
/**
 * Correlates the elements of two iterable sequences based on equality of keys and groups the results.
 *
 * @template TOuter The type of the elements of the first iterable sequence.
 * @template TInner The type of the elements of the second iterable sequence.
 * @template TKey The type of the keys returned by the key selector functions.
 * @template TResult The type of the result elements.
 * @param {Iterable<TInner>} inner The async-enumerable sequence to join to the first sequence.
 * @param {((value: TOuter) => TKey)} outerSelector A function to extract the join key from each
 * element of the first sequence.
 * @param {((value: TInner) => TKey)} innerSelector A function to extract the join key from each
 * element of the second sequence.
 * @param {((outer: TOuter, inner: Iterable<TInner>) => TResult)} resultSelector A function to create a result
 * element from an element from the first sequence and a collection of matching elements from the second sequence.
 * @returns {OperatorFunction<TOuter, TResult>} An operator that returns an iterable sequence that contains the result elements
 * that are obtained by performing a grouped join on two sequences.
 */
function groupJoin(inner, outerSelector, innerSelector, resultSelector) {
    return function groupJoinOperatorFunction(outer) {
        return new GroupJoinIterable(outer, inner, outerSelector, innerSelector, resultSelector);
    };
}
exports.groupJoin = groupJoin;

//# sourceMappingURL=groupjoin.js.map
