import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class DefaultIfEmptyAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _defaultValue;
    constructor(source: AsyncIterable<TSource>, defaultValue: TSource);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Returns the elements of the specified sequence or the default value in a singleton sequence
 * if the sequence is empty.
 *
 * @template T The type of elements in the source sequence.
 * @param {T} defaultValue The value to return if the sequence is empty.
 * @returns {MonoTypeOperatorAsyncFunction<T>} An operator which returns the elements of the source sequence or the default value as a singleton.
 */
export declare function defaultIfEmpty<T>(defaultValue: T): MonoTypeOperatorAsyncFunction<T>;
