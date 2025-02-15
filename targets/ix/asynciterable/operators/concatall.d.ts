import { AsyncIterableX } from '../asynciterablex';
import { OperatorAsyncFunction } from '../../interfaces';
export declare class ConcatAllAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    constructor(source: AsyncIterable<AsyncIterable<TSource>>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Concatenates all inner async-iterable sequences, as long as the previous
 * async-iterable sequence terminated successfully.
 *
 * @template T The type of elements in the source sequence.
 * @returns {OperatorAsyncFunction<AsyncIterable<T>, T>} An operator which concatenates all inner async-iterable sources.
 */
export declare function concatAll<T>(): OperatorAsyncFunction<AsyncIterable<T>, T>;
