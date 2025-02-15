import { AsyncIterableX } from '../asynciterablex';
import { OperatorAsyncFunction } from '../../interfaces';
export declare class MapAsyncIterable<TSource, TResult> extends AsyncIterableX<TResult> {
    private _source;
    private _selector;
    private _thisArg;
    constructor(source: AsyncIterable<TSource>, selector: (value: TSource, index: number, signal?: AbortSignal) => Promise<TResult> | TResult, thisArg?: any);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TResult>, void, unknown>;
}
/**
 * Projects each element of an async-enumerable sequence into a new form.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TResult The type of the elements in the result sequence, obtained by running the selector
 * function for each element in the source sequence.
 * @param {((value: TSource, index: number, signal?: AbortSignal) => Promise<TResult> | TResult)} selector A transform function
 * to apply to each source element.
 * @param {*} [thisArg] Optional this for binding to the selector.
 * @returns {OperatorAsyncFunction<TSource, TResult>} An async-iterable sequence whose elements are the result of invoking the transform
 * function on each element of source.
 */
export declare function map<TSource, TResult>(selector: (value: TSource, index: number, signal?: AbortSignal) => Promise<TResult> | TResult, thisArg?: any): OperatorAsyncFunction<TSource, TResult>;
