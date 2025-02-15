import { AsyncIterableX } from '../asynciterablex';
import { OperatorAsyncFunction } from '../../interfaces';
export interface Timestamp<TSource> {
    time: number;
    value: TSource;
}
export declare class TimestampAsyncIterable<TSource> extends AsyncIterableX<Timestamp<TSource>> {
    private _source;
    constructor(source: AsyncIterable<TSource>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<{
        time: number;
        value: Awaited<TSource>;
    }, void, unknown>;
}
/**
 * Timestamps each element in an async-iterable sequence using the local system clock.
 *
 * @template TSource The type of the elements in the source sequence.
 * @returns {OperatorAsyncFunction<TSource, Timestamp<TSource>>} An async-iterable sequence with timestamp information on elements.
 */
export declare function timestamp<TSource>(): OperatorAsyncFunction<TSource, Timestamp<TSource>>;
