"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.innerJoin = exports.JoinAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const _grouping_1 = require("./_grouping");
const identity_1 = require("../../util/identity");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class JoinAsyncIterable extends asynciterablex_1.AsyncIterableX {
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
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const map = await (0, _grouping_1.createGrouping)(this._inner, this._innerSelector, identity_1.identity, signal);
        for await (const outerElement of (0, withabort_1.wrapWithAbort)(this._outer, signal)) {
            const outerKey = await this._outerSelector(outerElement, signal);
            if (map.has(outerKey)) {
                for (const innerElement of map.get(outerKey)) {
                    yield await this._resultSelector(outerElement, innerElement, signal);
                }
            }
        }
    }
}
exports.JoinAsyncIterable = JoinAsyncIterable;
/**
 * Correlates the elements of two sequences based on matching keys.
 *
 * @template TOuter The type of the elements of the first async-iterable sequence.
 * @template TInner The type of the elements of the second async-iterable sequence.
 * @template TKey The type of the keys returned by the key selector functions.
 * @template TResult The type of the result elements.
 * @param {AsyncIterable<TInner>} inner The async-enumerable sequence to join to the first sequence.
 * @param {((value: TOuter, signal?: AbortSignal) => TKey | Promise<TKey>)} outerSelector A function to extract the join key from each element
 * of the first sequence.
 * @param {((value: TInner, signal?: AbortSignal) => TKey | Promise<TKey>)} innerSelector A function to extract the join key from each element
 * of the second sequence.
 * @param {((outer: TOuter, inner: TInner, signal?: AbortSignal) => TResult | Promise<TResult>)} resultSelector A function to create a result element
 * from two matching elements.
 * @returns {OperatorAsyncFunction<TOuter, TResult>} An async-iterable sequence that has elements that are obtained by performing an inner join
 * on two sequences.
 */
function innerJoin(inner, outerSelector, innerSelector, resultSelector) {
    return function innerJoinOperatorFunction(outer) {
        return new JoinAsyncIterable(outer, inner, outerSelector, innerSelector, resultSelector);
    };
}
exports.innerJoin = innerJoin;

//# sourceMappingURL=innerjoin.js.map
