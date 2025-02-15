import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class IntersectAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _first;
    private _second;
    private _comparer;
    constructor(first: AsyncIterable<TSource>, second: AsyncIterable<TSource>, comparer: (x: TSource, y: TSource) => boolean | Promise<boolean>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Produces the set intersection of two async-iterable sequences.
 *
 * @template TSource The type of the elements of the input sequences.
 * @param {AsyncIterable<TSource>} second An async-iterable sequence whose distinct elements that also
 * appear in the first sequence will be returned.
 * @param {((x: TSource, y: TSource) => boolean | Promise<boolean>)} [comparer=comparerAsync] An equality comparer to compare values.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator that returns a sequence that contains the elements that form the set
 * intersection of two sequences.
 */
export declare function intersect<TSource>(second: AsyncIterable<TSource>, comparer?: (x: TSource, y: TSource) => boolean | Promise<boolean>): MonoTypeOperatorAsyncFunction<TSource>;
