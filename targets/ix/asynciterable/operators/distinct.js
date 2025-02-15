"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinct = exports.DistinctAsyncIterable = void 0;
const asynciterablex_1 = require("./../asynciterablex");
const identity_1 = require("../../util/identity");
const arrayindexof_1 = require("../../util/arrayindexof");
const comparer_1 = require("../../util/comparer");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class DistinctAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _keySelector;
    _comparer;
    constructor(source, keySelector, comparer) {
        super();
        this._source = source;
        this._keySelector = keySelector;
        this._comparer = comparer;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const set = [];
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            const key = await this._keySelector(item, signal);
            if ((await (0, arrayindexof_1.arrayIndexOfAsync)(set, key, this._comparer)) === -1) {
                set.push(key);
                yield item;
            }
        }
    }
}
exports.DistinctAsyncIterable = DistinctAsyncIterable;
/**
 * Returns an async-iterable sequence that contains only distinct elements according to the keySelector and comparer.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TKey The type of the discriminator key computed for each element in the source sequence.
 * @param {DistinctOptions<TSource, TKey = TSource>} [options] The optional arguments for a key selector and comparer function.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator that returns distinct elements according to the keySelector and options.
 */
function distinct(options) {
    return function distinctOperatorFunction(source) {
        const { ['keySelector']: keySelector = identity_1.identityAsync, ['comparer']: comparer = comparer_1.comparerAsync } = options || {};
        return new DistinctAsyncIterable(source, keySelector, comparer);
    };
}
exports.distinct = distinct;

//# sourceMappingURL=distinct.js.map
