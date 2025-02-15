import { AsyncIterableX } from '../asynciterablex';
import { OperatorAsyncFunction } from '../../interfaces';
export declare class GroupedAsyncIterable<TKey, TValue> extends AsyncIterableX<TValue> {
    readonly key: TKey;
    private _source;
    constructor(key: TKey, source: Iterable<TValue>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TValue>, void, unknown>;
}
export declare class GroupByAsyncIterable<TSource, TKey, TValue> extends AsyncIterableX<GroupedAsyncIterable<TKey, TValue>> {
    private _source;
    private _keySelector;
    private _elementSelector;
    constructor(source: AsyncIterable<TSource>, keySelector: (value: TSource, signal?: AbortSignal) => TKey | Promise<TKey>, elementSelector: (value: TSource, signal?: AbortSignal) => TValue | Promise<TValue>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<GroupedAsyncIterable<TKey, TValue>, void, unknown>;
}
export declare function groupBy<TSource, TKey>(keySelector: (value: TSource, signal?: AbortSignal) => TKey | Promise<TKey>): OperatorAsyncFunction<TSource, GroupedAsyncIterable<TKey, TSource>>;
export declare function groupBy<TSource, TKey, TValue>(keySelector: (value: TSource, signal?: AbortSignal) => TKey | Promise<TKey>, elementSelector?: (value: TSource, signal?: AbortSignal) => TValue | Promise<TValue>): OperatorAsyncFunction<TSource, GroupedAsyncIterable<TKey, TValue>>;
