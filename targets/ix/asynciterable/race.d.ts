import { AsyncIterableX } from './asynciterablex';
export declare class RaceAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _sources;
    constructor(sources: AsyncIterable<TSource>[]);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Propagates the async sequence that reacts first.
 *
 * @param {...AsyncIterable<T>[]} sources The source sequences.
 * @return {AsyncIterable<T>} An async sequence that surfaces either of the given sequences, whichever reacted first.
 */
export declare function race<TSource>(...sources: AsyncIterable<TSource>[]): AsyncIterableX<TSource>;
