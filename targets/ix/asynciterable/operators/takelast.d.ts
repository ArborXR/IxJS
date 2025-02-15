import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class TakeLastAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _count;
    constructor(source: AsyncIterable<TSource>, count: number);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<NonNullable<TSource>>, void, unknown>;
}
/**
 * Returns a specified number of contiguous elements from the end of an async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {number} count Number of elements to take from the end of the source sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence containing the specified
 * number of elements from the end of the source sequence.
 */
export declare function takeLast<TSource>(count: number): MonoTypeOperatorAsyncFunction<TSource>;
