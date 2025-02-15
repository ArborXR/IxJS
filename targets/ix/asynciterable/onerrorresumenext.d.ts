import { AsyncIterableX } from './asynciterablex';
export declare class OnErrorResumeNextAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    constructor(source: Iterable<AsyncIterable<TSource>>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Concatenates all of the specified async-iterable sequences, even if the previous async-iterable sequence terminated exceptionally.
 *
 * @template T The type of the elements in the source sequences.
 * @param {...AsyncIterable<T>[]} args Async-iterable sequences to concatenate.
 * @returns {AsyncIterableX<T>} An async-iterable sequence that concatenates the source sequences, even if a sequence terminates exceptionally.
 */
export declare function onErrorResumeNext<T>(...args: AsyncIterable<T>[]): AsyncIterableX<T>;
