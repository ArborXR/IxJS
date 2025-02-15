"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupJoin = exports.GroupJoinAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const _grouping_1 = require("./_grouping");
const empty_1 = require("../empty");
const from_1 = require("../from");
const identity_1 = require("../../util/identity");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class GroupJoinAsyncIterable extends asynciterablex_1.AsyncIterableX {
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
            const innerElements = map.has(outerKey) ? map.get(outerKey) : (0, empty_1.empty)();
            yield await this._resultSelector(outerElement, (0, from_1.from)(innerElements), signal);
        }
    }
}
exports.GroupJoinAsyncIterable = GroupJoinAsyncIterable;
/**
 * Correlates the elements of two async-iterable sequences based on equality of keys and groups the results.
 *
 * @template TOuter The type of the elements of the first async-iterable sequence.
 * @template TInner The type of the elements of the second async-iterable sequence.
 * @template TKey The type of the keys returned by the key selector functions.
 * @template TResult The type of the result elements.
 * @param {AsyncIterable<TInner>} inner The async-enumerable sequence to join to the first sequence.
 * @param {((value: TOuter, signal?: AbortSignal) => TKey | Promise<TKey>)} outerSelector A function to extract the join key from each
 * element of the first sequence.
 * @param {((value: TInner, signal?: AbortSignal) => TKey | Promise<TKey>)} innerSelector A function to extract the join key from each
 * element of the second sequence.
 * @param {((
 *     outer: TOuter,
 *     inner: AsyncIterable<TInner>,
 *     signal?: AbortSignal
 *   ) => TResult | Promise<TResult>)} resultSelector A function to create a result element from an element from the first sequence and a
 * collection of matching elements from the second sequence.
 * @returns {OperatorAsyncFunction<TOuter, TResult>} An operator that returns an async-iterable sequence that contains the result elements
 * that are obtained by performing a grouped join on two sequences.
 */
function groupJoin(inner, outerSelector, innerSelector, resultSelector) {
    return function groupJoinOperatorFunction(outer) {
        return new GroupJoinAsyncIterable(outer, inner, outerSelector, innerSelector, resultSelector);
    };
}
exports.groupJoin = groupJoin;

//# sourceMappingURL=groupjoin.js.map
