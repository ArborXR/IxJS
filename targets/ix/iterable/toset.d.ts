/**
 * Converts the existing iterable into a promise which resolves a Set.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {Iterable<TSource>} source The iterable to convert into a set.
 * @returns {Set<TSource>} A promise which contains a Set with all the elements from the iterable.
 */
export declare function toSet<TSource>(source: Iterable<TSource>): Set<TSource>;
