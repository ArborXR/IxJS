"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = exports.GroupByAsyncIterable = exports.GroupedAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const identity_1 = require("../../util/identity");
const _grouping_1 = require("./_grouping");
const aborterror_1 = require("../../aborterror");
class GroupedAsyncIterable extends asynciterablex_1.AsyncIterableX {
    key;
    _source;
    constructor(key, source) {
        super();
        this.key = key;
        this._source = source;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        for (const item of this._source) {
            yield item;
        }
    }
}
exports.GroupedAsyncIterable = GroupedAsyncIterable;
class GroupByAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _keySelector;
    _elementSelector;
    constructor(source, keySelector, elementSelector) {
        super();
        this._source = source;
        this._keySelector = keySelector;
        this._elementSelector = elementSelector;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const map = await (0, _grouping_1.createGrouping)(this._source, this._keySelector, this._elementSelector, signal);
        for (const [key, values] of map) {
            yield new GroupedAsyncIterable(key, values);
        }
    }
}
exports.GroupByAsyncIterable = GroupByAsyncIterable;
/**
 * Groups the elements of an async-iterable sequence and selects the resulting elements by using a specified function.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TKey The type of the grouping key computed for each element in the source sequence.
 * @template TValue The type of the elements within the groups computed for each element in the source sequence.
 * @param {((value: TSource, signal?: AbortSignal) => TKey | Promise<TKey>)} keySelector A function to extract the key for each element.
 * @param {((
 *     value: TSource,
 *     signal?: AbortSignal
 *   ) => TValue | Promise<TValue>)} [elementSelector=identityAsync] A function to map each source element to an element in an async-enumerable group.
 * @returns {OperatorAsyncFunction<TSource, TResult>} A sequence of async-iterable groups, each of which corresponds to a unique key value,
 * containing all elements that share that same key value.
 */
function groupBy(keySelector, elementSelector = identity_1.identityAsync) {
    return function groupByOperatorFunction(source) {
        return new GroupByAsyncIterable(source, keySelector, elementSelector);
    };
}
exports.groupBy = groupBy;

//# sourceMappingURL=groupby.js.map
