import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class ReverseAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    constructor(source: AsyncIterable<TSource>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, undefined>;
}
/**
 * Reverses the async-iterable instance.
 *
 * @template TSource The type of the elements in the source sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The async-iterable in reversed sequence.
 */
export declare function reverse<TSource>(): MonoTypeOperatorAsyncFunction<TSource>;
