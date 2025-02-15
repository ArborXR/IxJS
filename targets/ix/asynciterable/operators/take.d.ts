import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class TakeAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _count;
    constructor(source: AsyncIterable<TSource>, count: number);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Returns a specified number of contiguous elements from the start of an async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {number} count The number of elements to return.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence that contains the specified
 * number of elements from the start of the input sequence.
 */
export declare function take<TSource>(count: number): MonoTypeOperatorAsyncFunction<TSource>;
