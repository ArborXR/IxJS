import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class FinallyAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _action;
    constructor(source: AsyncIterable<TSource>, action: () => void | Promise<void>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 *  Invokes a specified asynchronous action after the source async-iterable sequence terminates gracefully or exceptionally.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {(() => void | Promise<void>)} action Action to invoke and await asynchronously after the source async-iterable sequence terminates
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator that returns the source sequence with the
 * action-invoking termination behavior applied.
 */
export declare function finalize<TSource>(action: () => void | Promise<void>): MonoTypeOperatorAsyncFunction<TSource>;
