import { AsyncIterableX } from './asynciterablex';
export declare class OfAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _args;
    constructor(args: TSource[]);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Creates an async-iterable from the specified elements.
 *
 * @template TSource The type of the elements to create an async-iterable sequence.
 * @param {...TSource[]} args The elements to turn into an async-iterable sequence.
 * @returns {AsyncIterableX<TSource>} The async-iterable sequence created from the elements.
 */
export declare function of<TSource extends any[]>(...args: TSource): AsyncIterableX<TSource[number & keyof TSource]>;
