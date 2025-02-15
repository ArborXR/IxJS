import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class ThrottleAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _time;
    constructor(source: AsyncIterable<TSource>, time: number);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Throttles the source async-iterable sequence so that it doesn't emit more than one value during the given timeframe.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {number} time The time in milliseconds to throttle the source sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The source sequence throttled by the given timeframe.
 */
export declare function throttle<TSource>(time: number): MonoTypeOperatorAsyncFunction<TSource>;
