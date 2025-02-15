import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class EndWithAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _args;
    constructor(source: AsyncIterable<TSource>, args: TSource[]);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Append values to an async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {...TSource[]} args The values to append to the end of the async-iterable sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator which appends values to the end of the sequence.
 */
export declare function endWith<TSource>(...args: TSource[]): MonoTypeOperatorAsyncFunction<TSource>;
