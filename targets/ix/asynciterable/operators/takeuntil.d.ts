import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class TakeUntilAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _other;
    constructor(source: AsyncIterable<TSource>, other: (signal?: AbortSignal) => Promise<any>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Returns the elements from the source async-iterable sequence until the other function
 * that returns a promise produces an element.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {(signal?: AbortSignal) => Promise<any>} other A function that terminates the propagation of
 * elements in the source sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence containing the elements of the
 * source sequence up to the point the other function which returns a promise interrupted further propagation.
 */
export declare function takeUntil<TSource>(other: (signal?: AbortSignal) => Promise<any>): MonoTypeOperatorAsyncFunction<TSource>;
