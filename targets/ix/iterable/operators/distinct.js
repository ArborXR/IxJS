"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinct = exports.DistinctIterable = void 0;
const iterablex_1 = require("../iterablex");
const identity_1 = require("../../util/identity");
const arrayindexof_1 = require("../../util/arrayindexof");
const comparer_1 = require("../../util/comparer");
class DistinctIterable extends iterablex_1.IterableX {
    _source;
    _keySelector;
    _cmp;
    constructor(source, keySelector, cmp) {
        super();
        this._source = source;
        this._keySelector = keySelector;
        this._cmp = cmp;
    }
    *[Symbol.iterator]() {
        const set = [];
        for (const item of this._source) {
            const key = this._keySelector(item);
            if ((0, arrayindexof_1.arrayIndexOf)(set, key, this._cmp) === -1) {
                set.push(key);
                yield item;
            }
        }
    }
}
exports.DistinctIterable = DistinctIterable;
/**
 * Returns an iterable sequence that contains only distinct elements according to the keySelector and comparer.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TKey The type of the discriminator key computed for each element in the source sequence.
 * @param {DistinctOptions<TSource, TKey>} [options] The optional arguments for a key selector and comparer function.
 * @returns {MonoTypeOperatorFunction<TSource>} An operator that returns distinct elements according to the keySelector and options.
 */
function distinct(options) {
    return function distinctOperatorFunction(source) {
        const { ['keySelector']: keySelector = identity_1.identity, ['comparer']: comparer = comparer_1.comparer } = options || {};
        return new DistinctIterable(source, keySelector, comparer);
    };
}
exports.distinct = distinct;

//# sourceMappingURL=distinct.js.map
