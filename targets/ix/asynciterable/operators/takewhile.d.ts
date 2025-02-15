import { AsyncIterableX } from '../asynciterablex';
import { OperatorAsyncFunction } from '../../interfaces';
export declare class TakeWhileAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _predicate;
    constructor(source: AsyncIterable<TSource>, predicate: (value: TSource, index: number, signal?: AbortSignal) => boolean | Promise<boolean>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Returns elements from an async-iterable sequence as long as a specified condition is true.
 *
 * @template T The type of the elements in the source sequence.
 * @template S The result of the predicate that is truthy/falsy.
 * @param {(value: T, index: number, signal?: AbortSignal) => value is S} predicate A function to test each element for a condition.
 * @returns {OperatorAsyncFunction<T, S>} An async-iterable sequence that contains the elements from the input sequence that occur
 * before the element at which the test no longer passes.
 */
export declare function takeWhile<T, S extends T>(predicate: (value: T, index: number, signal?: AbortSignal) => value is S): OperatorAsyncFunction<T, S>;
/**
 * Returns elements from an async-iterable sequence as long as a specified condition is true.
 *
 * @template T The type of the elements in the source sequence.
 * @param {((value: T, index: number, signal?: AbortSignal) => boolean | Promise<boolean>)} predicate A function to test each element for a condition.
 * @returns {OperatorAsyncFunction<T, T>} An async-iterable sequence that contains the elements from the input sequence that occur
 * before the element at which the test no longer passes.
 */
export declare function takeWhile<T>(predicate: (value: T, index: number, signal?: AbortSignal) => boolean | Promise<boolean>): OperatorAsyncFunction<T, T>;
