import { ExtremaOptions } from './extremaoptions';
/**
 * Returns the elements in an iterable sequence with the maximum key value.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TKey The type of the key computed for each element in the source sequence.
 * @param {Iterable<TSource>} source The source to get the maximum by.
 * @param {ExtremaOptions<TSource, TKey>} [options] The options which include an optional comparer.
 * @returns {TSource[]} A list of zero or more elements that have a maximum key value.
 */
export declare function maxBy<TSource, TKey>(source: Iterable<TSource>, options?: ExtremaOptions<TSource, TKey>): TSource[];
