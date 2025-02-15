import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class TimeoutError extends Error {
    constructor(message?: string);
    get [Symbol.toStringTag](): string;
}
export declare class TimeoutAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _dueTime;
    constructor(source: AsyncIterable<TSource>, dueTime: number);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Applies a timeout policy for each element in the async-iterable sequence.
 * If the next element isn't received within the specified timeout duration starting from its predecessor, a TimeoutError is thrown.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {number} dueTime Maximum duration in milliseconds between values before a timeout occurs.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The source sequence with a TimeoutError in case of a timeout.
 */
export declare function timeout<TSource>(dueTime: number): MonoTypeOperatorAsyncFunction<TSource>;
