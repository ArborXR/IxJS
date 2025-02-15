import { AsyncIterableX } from './asynciterablex';
export declare class CatchAllAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    constructor(source: Iterable<AsyncIterable<TSource>>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Continues an async-iterable sequence that is terminated by an exception with the next async-iterable sequence.
 *
 * @template T The type of the elements in the source and handler sequences.
 * @param {Iterable<AsyncIterable<T>>} source async-iterable sequences to catch exceptions for.
 * @returns {AsyncIterableX<T>} An async-iterable sequence containing elements from consecutive source
 * sequences until a source sequence terminates successfully.
 */
export declare function catchAll<T>(source: Iterable<AsyncIterable<T>>): AsyncIterableX<T>;
/**
 * Continues an async-iterable sequence that is terminated by an exception with the next async-iterable sequence.
 *
 * @template T The type of the elements in the source and handler sequences.
 * @param {...AsyncIterable<T>[]} args async-iterable sequences to catch exceptions for.
 * @returns {AsyncIterableX<T>} An async-iterable sequence containing elements from consecutive source
 * sequences until a source sequence terminates successfully.
 */
export declare function catchError<T>(...args: AsyncIterable<T>[]): AsyncIterableX<T>;
