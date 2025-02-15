import { AsyncIterableX } from '../asynciterablex';
import { IRefCountList } from '../../iterable/operators/_refcountlist';
import { OperatorAsyncFunction } from '../../interfaces';
export declare class MemoizeAsyncBuffer<T> extends AsyncIterableX<T> {
    protected _source: AsyncIterator<T>;
    protected _buffer: IRefCountList<T>;
    protected _shared: Promise<IteratorResult<T>> | null;
    protected _error: any;
    protected _stopped: boolean;
    constructor(source: AsyncIterator<T>, buffer: IRefCountList<T>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<T>, void, unknown>;
    protected _getIterable(offset?: number): AsyncGenerator<Awaited<T>, void, unknown>;
}
/**
 * Creates a buffer with a view over the source sequence, causing a specified number of iterators to obtain access
 * to all of the sequence's elements without causing multiple enumerations over the source.
 * @template TSource Source sequence element type.
 * @param {number} [readerCount] Number of iterators that can access the underlying buffer.
 * Once every iterator has obtained an element from the buffer, the element is removed from the buffer.
 * @returns {OperatorAsyncFunction<TSource, TSource>} Buffer enabling a specified number of iterators to retrieve all
 * elements from the shared source sequence, without duplicating source iteration side-effects.
 */
export declare function memoize<TSource>(readerCount?: number): OperatorAsyncFunction<TSource, TSource>;
/**
 * Memoizes the source sequence within a selector function where a specified number of iterators can get access
 * to all of the sequence's elements without causing multiple iterations over the source.
 *
 * @template TSource Source sequence element type.
 * @template TResult Result sequence element type.
 * @param {number} [readerCount] Number of iterators that can access the underlying buffer. Once every
 * iterator has obtained an element from the buffer, the element is removed from the buffer.
 * @param {(value: AsyncIterableX<TSource>) => AsyncIterable<TResult>} [selector] Selector function with memoized access
 * to the source sequence for a specified number of iterators.
 * @returns {OperatorAsyncFunction<TSource, TResult>} Sequence resulting from applying the selector function to the
 * memoized view over the source sequence.
 */
export declare function memoize<TSource, TResult>(readerCount?: number, selector?: (value: AsyncIterable<TSource>) => AsyncIterable<TResult>): OperatorAsyncFunction<TSource, TResult>;
