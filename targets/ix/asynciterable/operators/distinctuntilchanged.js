"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinctUntilChanged = exports.DistinctUntilChangedAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const identity_1 = require("../../util/identity");
const comparer_1 = require("../../util/comparer");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class DistinctUntilChangedAsyncIterable extends asynciterablex_1.AsyncIterableX {
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
        let currentKey;
        let hasCurrentKey = false;
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            const key = await this._keySelector(item, signal);
            let comparerEquals = false;
            if (hasCurrentKey) {
                comparerEquals = await this._comparer(currentKey, key);
            }
            if (!hasCurrentKey || !comparerEquals) {
                hasCurrentKey = true;
                currentKey = key;
                yield item;
            }
        }
    }
}
exports.DistinctUntilChangedAsyncIterable = DistinctUntilChangedAsyncIterable;
/**
 * Returns an async-iterable sequence that contains only distinct contiguous elements according to the optional keySelector and comparer.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TKey The type of the discriminator key computed for each element in the source sequence.
 * @param {DistinctOptions<TSource, TKey = TSource>} [options] The optional options for adding a key selector and comparer.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator that returns an async-iterable that contains only distinct contiguous items.
 */
function distinctUntilChanged(options) {
    return function distinctUntilChangedOperatorFunction(source) {
        const { ['keySelector']: keySelector = identity_1.identityAsync, ['comparer']: comparer = comparer_1.comparerAsync } = options || {};
        return new DistinctUntilChangedAsyncIterable(source, keySelector, comparer);
    };
}
exports.distinctUntilChanged = distinctUntilChanged;

//# sourceMappingURL=distinctuntilchanged.js.map
