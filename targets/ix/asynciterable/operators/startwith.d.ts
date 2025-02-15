import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class StartWithAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _args;
    constructor(source: AsyncIterable<TSource>, args: TSource[]);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Prepend a value to an async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {...TSource[]} args Elements to prepend to the specified sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The source sequence prepended with the specified values.
 */
export declare function startWith<TSource>(...args: TSource[]): MonoTypeOperatorAsyncFunction<TSource>;
