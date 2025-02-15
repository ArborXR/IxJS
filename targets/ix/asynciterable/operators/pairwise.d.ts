import { AsyncIterableX } from '../asynciterablex';
import { OperatorAsyncFunction } from '../../interfaces';
export declare class PairwiseAsyncIterable<TSource> extends AsyncIterableX<TSource[]> {
    private _source;
    constructor(source: AsyncIterable<TSource>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<(NonNullable<TSource> | Awaited<TSource>)[], void, unknown>;
}
/**
 * Returns a sequence of each element in the input sequence and its predecessor, with the exception of the
 * first element which is only returned as the predecessor of the second element.
 *
 * @template TSource The type of the elements in the source sequence.
 * @returns {OperatorAsyncFunction<TSource, TSource[]>} The result sequence.
 */
export declare function pairwise<TSource>(): OperatorAsyncFunction<TSource, TSource[]>;
