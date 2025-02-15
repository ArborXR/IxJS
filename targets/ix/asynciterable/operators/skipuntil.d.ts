import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class SkipUntilAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _other;
    constructor(source: AsyncIterable<TSource>, other: (signal?: AbortSignal) => Promise<any>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Returns the elements from the source observable sequence only after the function that returns a promise produces an element.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {(signal?: AbortSignal) => Promise<any>} other A function which returns a promise that triggers propagation
 * of elements of the source sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence containing the elements of the source sequence
 * starting from the point the function that returns a promise triggered propagation.
 */
export declare function skipUntil<TSource>(other: (signal?: AbortSignal) => Promise<any>): MonoTypeOperatorAsyncFunction<TSource>;
