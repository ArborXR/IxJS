import { AsyncIterableX } from './asynciterablex';
export declare class RepeatValueAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _value;
    private _count;
    constructor(value: TSource, count: number);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Repeats a given value for the specified number of times as an async-iterable.
 *
 * @template TSource The type of element to repeat.
 * @param {TSource} value The value to repeat as an async-iterable.
 * @param {number} [count=-1] The number of times to repeat the value, infinite if not specified.
 * @returns {AsyncIterableX<TSource>} An async-iterable with a single item that is repeated over the specified times.
 */
export declare function repeatValue<TSource>(value: TSource, count?: number): AsyncIterableX<TSource>;
