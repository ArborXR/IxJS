import { extremaBy } from './_extremaby';
import { equalityComparerAsync } from '../util/comparer';
/**
 * Returns the elements in an async-enumerable sequence with the minimum key value.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TKey The type of the key computed for each element in the source sequence.
 * @param {AsyncIterable<TSource>} source An async-iterable sequence to get the minimum elements for.
 * @param {ExtremaOptions<TSource, TKey>} options The options which include an optional comparer and abort signal.
 * @returns {Promise<TSource[]>} A promise containing a list of zero or more elements that have a minimum key value.
 */
export function minBy(source, options) {
    const { ['comparer']: comparer = equalityComparerAsync, ['selector']: selector, ['signal']: signal, } = options || {};
    const newComparer = async (key, minValue) => -(await comparer(key, minValue));
    return extremaBy(source, selector, newComparer, signal);
}

//# sourceMappingURL=minby.mjs.map
