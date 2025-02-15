import { ExtremaOptions } from './extremaoptions';
/**
 * Returns the elements in an async-enumerable sequence with the minimum key value.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TKey The type of the key computed for each element in the source sequence.
 * @param {AsyncIterable<TSource>} source An async-iterable sequence to get the minimum elements for.
 * @param {ExtremaOptions<TSource, TKey>} options The options which include an optional comparer and abort signal.
 * @returns {Promise<TSource[]>} A promise containing a list of zero or more elements that have a minimum key value.
 */
export declare function minBy<TSource, TKey>(source: AsyncIterable<TSource>, options?: ExtremaOptions<TSource, TKey>): Promise<TSource[]>;
