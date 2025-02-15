import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class DelayAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _dueTime;
    constructor(source: AsyncIterable<TSource>, dueTime: number);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Delays the emitting of the first item in the async-iterable by the given due time.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {number} dueTime The delay duration in milliseconds
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator which delays the before the iteration begins.
 */
export declare function delay<TSource>(dueTime: number): MonoTypeOperatorAsyncFunction<TSource>;
