import { AsyncIterableX } from '../asynciterablex';
import { OperatorAsyncFunction } from '../../interfaces';
export declare class SkipWhileAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _predicate;
    constructor(source: AsyncIterable<TSource>, predicate: (value: TSource, index: number, signal?: AbortSignal) => boolean | Promise<boolean>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Bypasses elements in an async-iterale sequence as long as a specified condition is true
 * and then returns the remaining elements.
 *
 * @template T The type of the elements in the source sequence.
 * @template S The result of the predicate that is truthy/falsy.
 * @param {(value: T, index: number, signal?: AbortSignal) => value is S} predicate A function to test each element for a condition.
 * @returns {OperatorAsyncFunction<T, S>} An async-iterable sequence that contains the elements from the input
 * sequence starting at the first element in the linear series that does not pass the test specified by predicate.
 */
export declare function skipWhile<T, S extends T>(predicate: (value: T, index: number, signal?: AbortSignal) => value is S): OperatorAsyncFunction<T, S>;
/**
 * Bypasses elements in an async-iterale sequence as long as a specified condition is true
 * and then returns the remaining elements.
 *
 * @template T The type of the elements in the source sequence.
 * @param {((value: T, index: number, signal?: AbortSignal) => boolean | Promise<boolean>)} predicate A function to test each element for a condition.
 * @returns {OperatorAsyncFunction<T, T>} An async-iterable sequence that contains the elements from the input
 * sequence starting at the first element in the linear series that does not pass the test specified by predicate.
 */
export declare function skipWhile<T>(predicate: (value: T, index: number, signal?: AbortSignal) => boolean | Promise<boolean>): OperatorAsyncFunction<T, T>;
