import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class SliceAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _begin;
    private _end;
    constructor(source: AsyncIterable<TSource>, begin: number, end: number);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Returns the elements from the source async-iterable sequence only after the function that returns a promise produces an element.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {number} begin Zero-based index at which to begin extraction.
 * @param {number} [end=Infinity] Zero-based index before which to end extraction.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable containing the extracted elements.
 */
export declare function slice<TSource>(begin: number, end?: number): MonoTypeOperatorAsyncFunction<TSource>;
