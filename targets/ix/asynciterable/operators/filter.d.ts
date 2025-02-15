import { AsyncIterableX } from '../asynciterablex';
import { OperatorAsyncFunction } from '../../interfaces';
export declare class FilterAsyncIterable<TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _predicate;
    private _thisArg;
    constructor(source: AsyncIterable<TSource>, predicate: (value: TSource, index: number) => boolean | Promise<boolean>, thisArg?: any);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
export declare function filter<T, S extends T>(predicate: (value: T, index: number) => value is S, thisArg?: any): OperatorAsyncFunction<T, S>;
export declare function filter<T>(predicate: (value: T, index: number) => boolean | Promise<boolean>, thisArg?: any): OperatorAsyncFunction<T, T>;
