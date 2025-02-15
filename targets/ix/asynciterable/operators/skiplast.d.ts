import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class SkipLastAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _count;
    constructor(source: AsyncIterable<TSource>, count: number);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<NonNullable<TSource>>, void, unknown>;
}
/**
 * Bypasses a specified number of elements at the end of an async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {number} count Number of elements to bypass at the end of the source sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence containing the
 * source sequence elements except for the bypassed ones at the end.
 */
export declare function skipLast<TSource>(count: number): MonoTypeOperatorAsyncFunction<TSource>;
