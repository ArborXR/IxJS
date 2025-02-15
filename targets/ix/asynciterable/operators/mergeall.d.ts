/**
 * Merges elements from all inner async-iterable sequences into a single async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequences.
 * @returns {OperatorAsyncFunction<AsyncIterable<TSource>, TSource>} The async-iterable sequence that merges the elements of the inner sequences.
 */
export declare function mergeAll(concurrent?: number): <TSource>(source: AsyncIterable<AsyncIterable<TSource>>) => import("..").AsyncIterableX<TSource>;
