import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
export declare class RepeatAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _count;
    constructor(source: AsyncIterable<TSource>, count: number);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Repeats the async-enumerable sequence a specified number of times.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {number} [count=-1] Number of times to repeat the sequence. If not specified, the sequence repeats indefinitely.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The async-iterable sequence producing the elements of the given sequence repeatedly.
 */
export declare function repeat<TSource>(count?: number): MonoTypeOperatorAsyncFunction<TSource>;
