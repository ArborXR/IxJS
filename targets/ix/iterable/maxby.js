"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxBy = void 0;
const _extremaby_1 = require("./_extremaby");
const comparer_1 = require("../util/comparer");
/**
 * Returns the elements in an iterable sequence with the maximum key value.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TKey The type of the key computed for each element in the source sequence.
 * @param {Iterable<TSource>} source The source to get the maximum by.
 * @param {ExtremaOptions<TSource, TKey>} [options] The options which include an optional comparer.
 * @returns {TSource[]} A list of zero or more elements that have a maximum key value.
 */
function maxBy(source, options) {
    const { ['comparer']: comparer = comparer_1.equalityComparer, ['selector']: selector } = options || {};
    return (0, _extremaby_1.extremaBy)(source, selector, comparer);
}
exports.maxBy = maxBy;

//# sourceMappingURL=maxby.js.map
