import { AsyncIterableX } from '../asynciterablex';
import { OperatorAsyncFunction } from '../../interfaces';
export interface TimeInterval<T> {
    value: T;
    elapsed: number;
}
export declare class TimeIntervalAsyncIterable<TSource> extends AsyncIterableX<TimeInterval<TSource>> {
    private _source;
    constructor(source: AsyncIterable<TSource>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<{
        value: Awaited<TSource>;
        elapsed: number;
    }, void, unknown>;
}
/**
 * Records the time interval between consecutive elements in an async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @returns {OperatorAsyncFunction<TSource, TimeInterval<TSource>>} An async-iterable sequence with time
 * interval information on elements.
 */
export declare function timeInterval<TSource>(): OperatorAsyncFunction<TSource, TimeInterval<TSource>>;
