"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thenByDescending = exports.thenBy = exports.orderByDescending = exports.orderBy = exports.OrderedAsyncIterableX = exports.OrderedAsyncIterableBaseX = void 0;
const asynciterablex_1 = require("../asynciterablex");
const toarray_1 = require("../toarray");
const sorter_1 = require("../../util/sorter");
const aborterror_1 = require("../../aborterror");
class OrderedAsyncIterableBaseX extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const array = await (0, toarray_1.toArray)(this._source, signal);
        const len = array.length;
        const indices = new Array(len);
        for (let i = 0; i < len; i++) {
            indices[i] = i;
        }
        indices.sort(this._getSorter(array));
        for (const index of indices) {
            yield array[index];
        }
    }
    thenBy(keySelector, comparer = sorter_1.sorter) {
        return new OrderedAsyncIterableX(this._source, keySelector, comparer, false, this);
    }
    thenByDescending(keySelector, comparer = sorter_1.sorter) {
        return new OrderedAsyncIterableX(this._source, keySelector, comparer, true, this);
    }
}
exports.OrderedAsyncIterableBaseX = OrderedAsyncIterableBaseX;
class OrderedAsyncIterableX extends OrderedAsyncIterableBaseX {
    _keySelector;
    _comparer;
    _descending;
    _parent;
    constructor(source, keySelector, comparer, descending, parent) {
        super(source);
        this._keySelector = keySelector;
        this._comparer = comparer;
        this._descending = descending;
        this._parent = parent;
    }
    _getSorter(elements, next) {
        const keys = elements.map(this._keySelector);
        const comparer = this._comparer;
        const parent = this._parent;
        const descending = this._descending;
        const sorter = (x, y) => {
            const result = comparer(keys[x], keys[y]);
            if (result === 0) {
                return next ? next(x, y) : x - y;
            }
            return descending ? -result : result;
        };
        return parent ? parent._getSorter(elements, sorter) : sorter;
    }
}
exports.OrderedAsyncIterableX = OrderedAsyncIterableX;
/**
/**
 * Sorts the elements of a sequence in ascending order according to a key by using a specified comparer.
 *
 * @template TKey The type of the elements of source.
 * @template TSource The type of the key returned by keySelector.
 * @param {(item: TSource) => TKey} keySelector A function to extract a key from an element.
 * @param {(fst: TKey, snd: TKey) => number} [comparer=defaultSorter] A comparer to compare keys.
 * @returns {UnaryFunction<AsyncIterable<TSource>, OrderedAsyncIterableX<TKey, TSource>>} An ordered async-iterable sequence whose
 * elements are sorted according to a key and comparer.
 */
function orderBy(keySelector, comparer = sorter_1.sorter) {
    return function orderByOperatorFunction(source) {
        return new OrderedAsyncIterableX(source, keySelector, comparer, false);
    };
}
exports.orderBy = orderBy;
/**
 * Sorts the elements of a sequence in descending order according to a key by using a specified comparer.
 *
 * @template TKey The type of the elements of source.
 * @template TSource The type of the key returned by keySelector.
 * @param {(item: TSource) => TKey} keySelector A function to extract a key from an element.
 * @param {(fst: TKey, snd: TKey) => number} [comparer=defaultSorter] A comparer to compare keys.
 * @returns {UnaryFunction<AsyncIterable<TSource>, OrderedAsyncIterableX<TKey, TSource>>} An ordered async-iterable sequence whose
 * elements are sorted in descending order according to a key and comparer.
 */
function orderByDescending(keySelector, comparer = sorter_1.sorter) {
    return function orderByDescendingOperatorFunction(source) {
        return new OrderedAsyncIterableX(source, keySelector, comparer, true);
    };
}
exports.orderByDescending = orderByDescending;
/**
 * Performs a subsequent ordering of the elements in a sequence in ascending order according to a key using a specified comparer.
 *
 * @template TKey The type of the elements of source.
 * @template TSource The type of the key returned by keySelector.
 * @param {(item: TSource) => TKey} keySelector A function to extract a key from an element.
 * @param {(fst: TKey, snd: TKey) => number} [comparer=defaultSorter] A comparer to compare keys.
 * @returns {UnaryFunction<AsyncIterable<TSource>, OrderedAsyncIterableX<TKey, TSource>>} An ordered async-iterable whose elements are
 * sorted according to a key and comparer.
 */
function thenBy(keySelector, comparer = sorter_1.sorter) {
    return function thenByOperatorFunction(source) {
        const orderSource = source;
        return new OrderedAsyncIterableX(orderSource._source, keySelector, comparer, false, orderSource);
    };
}
exports.thenBy = thenBy;
/**
 * Performs a subsequent ordering of the elements in a sequence in descending order according to a key using a specified comparer.
 *
 * @template TKey The type of the elements of source.
 * @template TSource The type of the key returned by keySelector.
 * @param {(item: TSource) => TKey} keySelector A function to extract a key from an element.
 * @param {(fst: TKey, snd: TKey) => number} [comparer=defaultSorter] A comparer to compare keys.
 * @returns {UnaryFunction<AsyncIterable<TSource>, OrderedAsyncIterableX<TKey, TSource>>} An ordered async-iterable whose elements are
 * sorted in descending order according to a key and comparer.
 */
function thenByDescending(keySelector, comparer = sorter_1.sorter) {
    return function thenByDescendingOperatorFunction(source) {
        const orderSource = source;
        return new OrderedAsyncIterableX(orderSource._source, keySelector, comparer, true, orderSource);
    };
}
exports.thenByDescending = thenByDescending;

//# sourceMappingURL=orderby.js.map
