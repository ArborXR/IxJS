import { AsyncIterableX } from '../asynciterablex';
import { OperatorAsyncFunction } from '../../interfaces';
export declare class CatchWithAsyncIterable<TSource, TResult> extends AsyncIterableX<TSource | TResult> {
    private _source;
    private _handler;
    constructor(source: AsyncIterable<TSource>, handler: (error: any, signal?: AbortSignal) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource> | Awaited<TResult>, void, unknown>;
}
/**
 * Continues an async-iterable sequence that is terminated by an exception with the
 * async-iterable sequence produced by the handler.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TResult The type of elements from the handler function.
 * @param {((
 *     error: any,
 *     signal?: AbortSignal
 *   ) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>)} handler Error handler function, producing another async-iterable sequence.
 * @returns {(OperatorAsyncFunction<TSource, TSource | TResult>)} An operator which continues an async-iterable sequence that is terminated by
 * an exception with the specified handler.
 */
export declare function catchError<TSource, TResult>(handler: (error: any, signal?: AbortSignal) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>): OperatorAsyncFunction<TSource, TSource | TResult>;
