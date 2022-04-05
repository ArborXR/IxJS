import { AsyncIterableX } from './asynciterablex';
export declare class MergeAsyncIterable<T> extends AsyncIterableX<T> {
    private _source;
    constructor(source: AsyncIterable<T>[]);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncIterator<T>;
}
/**
 * Merges elements from all of the specified async-iterable sequences into a single async-iterable sequence.
 *
 * @template T The type of the first async-iterable sequence.
 * @template T2 The type of the second async-iterable sequence.
 * @param {AsyncIterable<T>} source The first async-iterable source to merge.
 * @param {AsyncIterable<T2>} v2 The second async-iterable source to merge.
 * @returns {(AsyncIterableX<T | T2>)} The merged elements from all of the specified async-iterable sequences into a single async-iterable sequence.
 */
export declare function merge<T, T2>(source: AsyncIterable<T>, v2: AsyncIterable<T2>): AsyncIterableX<T | T2>;
/**
 * Merges elements from all of the specified async-iterable sequences into a single async-iterable sequence.
 *
 * @template T The type of the first async-iterable sequence.
 * @template T2 The type of the second async-iterable sequence.
 * @template T3 The type of the third async-iterable sequence.
 * @param {AsyncIterable<T>} source The first async-iterable source to merge.
 * @param {AsyncIterable<T2>} v2 The second async-iterable source to merge.
 * @param {AsyncIterable<T3>} v3 The third async-iterable source to merge.
 * @returns {(AsyncIterableX<T | T2 | T3>)} The merged elements from all of the specified async-iterable sequences
 * into a single async-iterable sequence.
 */
export declare function merge<T, T2, T3>(source: AsyncIterable<T>, v2: AsyncIterable<T2>, v3: AsyncIterable<T3>): AsyncIterableX<T | T2 | T3>;
/**
 * Merges elements from all of the specified async-iterable sequences into a single async-iterable sequence.
 *
 * @template T The type of the first async-iterable sequence.
 * @template T2 The type of the second async-iterable sequence.
 * @template T3 The type of the third async-iterable sequence.
 * @template T4 The type of the fourth async-iterable sequence.
 * @param {AsyncIterable<T>} source The first async-iterable source to merge.
 * @param {AsyncIterable<T2>} v2 The second async-iterable source to merge.
 * @param {AsyncIterable<T3>} v3 The third async-iterable source to merge.
 * @param {AsyncIterable<T4>} v4 The fourth async-iterable source to merge.
 * @returns {(AsyncIterableX<T | T2 | T3 | T4>)} The merged elements from all of the specified async-iterable sequences
 * into a single async-iterable sequence.
 */
export declare function merge<T, T2, T3, T4>(source: AsyncIterable<T>, v2: AsyncIterable<T2>, v3: AsyncIterable<T3>, v4: AsyncIterable<T4>): AsyncIterableX<T | T2 | T3 | T4>;
/**
 * Merges elements from all of the specified async-iterable sequences into a single async-iterable sequence.
 *
 * @template T The type of the first async-iterable sequence.
 * @template T2 The type of the second async-iterable sequence.
 * @template T3 The type of the third async-iterable sequence.
 * @template T4 The type of the fourth async-iterable sequence.
 * @template T5 The type of the fifth async-iterable sequence.
 * @param {AsyncIterable<T>} source The first async-iterable source to merge.
 * @param {AsyncIterable<T2>} v2 The second async-iterable source to merge.
 * @param {AsyncIterable<T3>} v3 The third async-iterable source to merge.
 * @param {AsyncIterable<T4>} v4 The fourth async-iterable source to merge.
 * @param {AsyncIterable<T5>} v5 The fifth async-iterable source to merge.
 * @returns {(AsyncIterable<T | T2 | T3 | T4 | T5>)} The merged elements from all of the specified async-iterable sequences
 * into a single async-iterable sequence.
 */
export declare function merge<T, T2, T3, T4, T5>(source: AsyncIterable<T>, v2: AsyncIterable<T2>, v3: AsyncIterable<T3>, v4: AsyncIterable<T4>, v5: AsyncIterable<T5>): AsyncIterable<T | T2 | T3 | T4 | T5>;
/**
 * Merges elements from all of the specified async-iterable sequences into a single async-iterable sequence.
 *
 * @template T The type of the first async-iterable sequence.
 * @template T2 The type of the second async-iterable sequence.
 * @template T3 The type of the third async-iterable sequence.
 * @template T4 The type of the fourth async-iterable sequence.
 * @template T5 The type of the fifth async-iterable sequence.
 * @template T6 The type of the sixth async-iterable sequence.
 * @param {AsyncIterable<T>} source The first async-iterable source to merge.
 * @param {AsyncIterable<T2>} v2 The second async-iterable source to merge.
 * @param {AsyncIterable<T3>} v3 The third async-iterable source to merge.
 * @param {AsyncIterable<T4>} v4 The fourth async-iterable source to merge.
 * @param {AsyncIterable<T5>} v5 The fifth async-iterable source to merge.
 * @param {AsyncIterable<T6>} v6 The sixth async-iterable source to merge.
 * @returns {(AsyncIterable<T | T2 | T3 | T4 | T5 | T6>)} The merged elements from all of the specified async-iterable sequences
 * into a single async-iterable sequence.
 */
export declare function merge<T, T2, T3, T4, T5, T6>(source: AsyncIterable<T>, v2: AsyncIterable<T2>, v3: AsyncIterable<T3>, v4: AsyncIterable<T4>, v5: AsyncIterable<T5>, v6: AsyncIterable<T6>): AsyncIterable<T | T2 | T3 | T4 | T5 | T6>;
/**
 * Merges elements from all of the specified async-iterable sequences into a single async-iterable sequence.
 *
 * @template T The type of the elements in the sequence to merge.
 * @param {AsyncIterable<T>} source The first async-iterable source to merge.
 * @param {...AsyncIterable<T>[]} args The async-iterable sources to merge.
 * @returns {AsyncIterableX<T>} The merged elements from all of the specified async-iterable sequences into a single async-iterable sequence.
 */
export declare function merge<T>(source: AsyncIterable<T>, ...args: AsyncIterable<T>[]): AsyncIterableX<T>;
