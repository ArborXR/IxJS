"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = exports.GroupByIterable = exports.GroupedIterable = void 0;
const iterablex_1 = require("../iterablex");
const identity_1 = require("../../util/identity");
const _grouping_1 = require("./_grouping");
class GroupedIterable extends iterablex_1.IterableX {
    key;
    _source;
    constructor(key, source) {
        super();
        this.key = key;
        this._source = source;
    }
    *[Symbol.iterator]() {
        for (const item of this._source) {
            yield item;
        }
    }
}
exports.GroupedIterable = GroupedIterable;
class GroupByIterable extends iterablex_1.IterableX {
    _source;
    _keySelector;
    _elementSelector;
    constructor(source, keySelector, elementSelector) {
        super();
        this._source = source;
        this._keySelector = keySelector;
        this._elementSelector = elementSelector;
    }
    *[Symbol.iterator]() {
        const map = (0, _grouping_1.createGrouping)(this._source, this._keySelector, this._elementSelector);
        for (const [key, values] of map) {
            yield new GroupedIterable(key, values);
        }
    }
}
exports.GroupByIterable = GroupByIterable;
/**
 * Groups the elements of an async-iterable sequence and selects the resulting elements by using a specified function.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TKey The type of the grouping key computed for each element in the source sequence.
 * @template TValue The type of the elements within the groups computed for each element in the source sequence.
 * @param {((value: TSource) => TKey)} keySelector A function to extract the key for each element.
 * @param {((value: TSource) => TValue)} [elementSelector=identity] A function to map each source element to an element in an async-enumerable group.
 * @returns {OperatorFunction<TSource, TResult>} A sequence of async-iterable groups, each of which corresponds to a unique key value,
 * containing all elements that share that same key value.
 */
function groupBy(keySelector, elementSelector = identity_1.identity) {
    return function groupByOperatorFunction(source) {
        return new GroupByIterable(source, keySelector, elementSelector);
    };
}
exports.groupBy = groupBy;

//# sourceMappingURL=groupby.js.map
