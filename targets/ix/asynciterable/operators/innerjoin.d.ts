import { AsyncIterableX } from '../asynciterablex';
import { OperatorAsyncFunction } from '../../interfaces';
export declare class JoinAsyncIterable<TOuter, TInner, TKey, TResult> extends AsyncIterableX<TResult> {
    private _outer;
    private _inner;
    private _outerSelector;
    private _innerSelector;
    private _resultSelector;
    constructor(outer: AsyncIterable<TOuter>, inner: AsyncIterable<TInner>, outerSelector: (value: TOuter, signal?: AbortSignal) => TKey | Promise<TKey>, innerSelector: (value: TInner, signal?: AbortSignal) => TKey | Promise<TKey>, resultSelector: (outer: TOuter, inner: TInner, signal?: AbortSignal) => TResult | Promise<TResult>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TResult>, void, unknown>;
}
/**
 * Correlates the elements of two sequences based on matching keys.
 *
 * @template TOuter The type of the elements of the first async-iterable sequence.
 * @template TInner The type of the elements of the second async-iterable sequence.
 * @template TKey The type of the keys returned by the key selector functions.
 * @template TResult The type of the result elements.
 * @param {AsyncIterable<TInner>} inner The async-enumerable sequence to join to the first sequence.
 * @param {((value: TOuter, signal?: AbortSignal) => TKey | Promise<TKey>)} outerSelector A function to extract the join key from each element
 * of the first sequence.
 * @param {((value: TInner, signal?: AbortSignal) => TKey | Promise<TKey>)} innerSelector A function to extract the join key from each element
 * of the second sequence.
 * @param {((outer: TOuter, inner: TInner, signal?: AbortSignal) => TResult | Promise<TResult>)} resultSelector A function to create a result element
 * from two matching elements.
 * @returns {OperatorAsyncFunction<TOuter, TResult>} An async-iterable sequence that has elements that are obtained by performing an inner join
 * on two sequences.
 */
export declare function innerJoin<TOuter, TInner, TKey, TResult>(inner: AsyncIterable<TInner>, outerSelector: (value: TOuter, signal?: AbortSignal) => TKey | Promise<TKey>, innerSelector: (value: TInner, signal?: AbortSignal) => TKey | Promise<TKey>, resultSelector: (outer: TOuter, inner: TInner, signal?: AbortSignal) => TResult | Promise<TResult>): OperatorAsyncFunction<TOuter, TResult>;
