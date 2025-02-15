import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class ExceptAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _first;
    private _second;
    private _comparer;
    constructor(first: AsyncIterable<TSource>, second: AsyncIterable<TSource>, comparer: (x: TSource, y: TSource) => boolean | Promise<boolean>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 *  Produces the set difference of two async-iterable sequences by using the specified equality comparer to compare values.
 *
 * @template TSource The type of the elements of the input sequences.
 * @param {AsyncIterable<TSource>} second An async-iterable sequence whose elements that also occur in the
 * operator sequence will cause those elements to be removed from the returned sequence.
 * @param {((x: TSource, y: TSource) => boolean | Promise<boolean>)} [comparer=comparerAsync] An equality comparer to compare values
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator that returns a sequence that contains the set
 * difference of the elements of two sequences.
 */
export declare function except<TSource>(second: AsyncIterable<TSource>, comparer?: (x: TSource, y: TSource) => boolean | Promise<boolean>): MonoTypeOperatorAsyncFunction<TSource>;
