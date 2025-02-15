import { AsyncIterableX } from '../asynciterablex';
import { PartialAsyncObserver } from '../../observer';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class TapAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _observer;
    constructor(source: AsyncIterable<TSource>, observer: PartialAsyncObserver<TSource>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Invokes an action for each element in the async-iterable sequence, and propagates all observer
 * messages through the result sequence. This method can be used for debugging, logging, etc. by
 * intercepting the message stream to run arbitrary actions for messages on the pipeline.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {PartialAsyncObserver<TSource>} observer Observer whose methods to invoke as part of the source sequence's observation.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The source sequence with the side-effecting behavior applied.
 */
export declare function tap<TSource>(observer: PartialAsyncObserver<TSource>): MonoTypeOperatorAsyncFunction<TSource>;
/**
 * Invokes an action for each element in the async-iterable sequence, and propagates all observer
 * messages through the result sequence. This method can be used for debugging, logging, etc. by
 * intercepting the message stream to run arbitrary actions for messages on the pipeline.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {(((value: TSource) => any) | null)} [next] Function to invoke for each element in the async-iterable sequence.
 * @param {(((err: any) => any) | null)} [error] Function to invoke upon exceptional termination of the async-iterable sequence.
 * @param {((() => any) | null)} [complete] Function to invoke upon graceful termination of the async-iterable sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The source sequence with the side-effecting behavior applied.
 */
export declare function tap<TSource>(next?: ((value: TSource) => any) | null, error?: ((err: any) => any) | null, complete?: (() => any) | null): MonoTypeOperatorAsyncFunction<TSource>;
