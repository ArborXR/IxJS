"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minBy = void 0;
const _extremaby_1 = require("./_extremaby");
const comparer_1 = require("../util/comparer");
/**
 * Returns the elements in an terable sequence with the minimum key value.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TKey The type of the key computed for each element in the source sequence.
 * @param {Iterable<TSource>} source An async-iterable sequence to get the minimum elements for.
 * @param {ExtremaOptions<TSource, TKey>} [options] The options which include an optional comparer.
 * @returns {TSource[]} A list of zero or more elements that have a minimum key value.
 */
function minBy(source, options) {
    const { ['comparer']: comparer = comparer_1.equalityComparer, ['selector']: selector } = options || {};
    const newComparer = (key, minValue) => -comparer(key, minValue);
    return (0, _extremaby_1.extremaBy)(source, selector, newComparer);
}
exports.minBy = minBy;

//# sourceMappingURL=minby.js.map
