import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class ExpandAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _selector;
    constructor(source: AsyncIterable<TSource>, selector: (value: TSource, signal?: AbortSignal) => AsyncIterable<TSource> | Promise<AsyncIterable<TSource>>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Expands (breadth first) the async-iterable sequence by recursively applying a selector function to generate more sequences at each recursion level.
 *
 * @template TSource Source sequence element type.
 * @param {((
 *     value: TSource,
 *     signal?: AbortSignal
 *   ) => AsyncIterable<TSource> | Promise<AsyncIterable<TSource>>)} selector Selector function to retrieve the next sequence to expand.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator which returns a sequence with results
 * from the recursive expansion of the source sequence.
 */
export declare function expand<TSource>(selector: (value: TSource, signal?: AbortSignal) => AsyncIterable<TSource> | Promise<AsyncIterable<TSource>>): MonoTypeOperatorAsyncFunction<TSource>;
