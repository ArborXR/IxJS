import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class DebounceAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _time;
    constructor(source: AsyncIterable<TSource>, time: number);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Emits a notification from the source async-iterable only after a particular time span
 * has passed without another source emission.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {number} time The timeout duration in milliseconds
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator function which debounces by the given timeout.
 */
export declare function debounce<TSource>(time: number): MonoTypeOperatorAsyncFunction<TSource>;
