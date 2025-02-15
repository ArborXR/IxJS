import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class UnionAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _left;
    private _right;
    private _comparer;
    constructor(left: AsyncIterable<TSource>, right: AsyncIterable<TSource>, comparer: (x: TSource, y: TSource) => boolean | Promise<boolean>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Produces the set union of two sequences by using the given equality comparer.
 *
 * @template TSource The type of the elements of the input sequences.
 * @param {AsyncIterable<TSource>} right An async-iterable sequence whose distinct elements form the second set for the union.
 * @param {((x: TSource, y: TSource) => boolean | Promise<boolean>)} [comparer=comparerAsync] The equality comparer to compare values.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence that contains the elements from both input sequences,
 * excluding duplicates.
 */
export declare function union<TSource>(right: AsyncIterable<TSource>, comparer?: (x: TSource, y: TSource) => boolean | Promise<boolean>): MonoTypeOperatorAsyncFunction<TSource>;
