import { AsyncIterableX } from '../asynciterablex';
import { MonoTypeOperatorAsyncFunction } from '../../interfaces';
import { DistinctOptions } from './distinctoptions';
export declare class DistinctUntilChangedAsyncIterable<TSource, TKey = TSource> extends AsyncIterableX<TSource> {
    private _source;
    private _keySelector;
    private _comparer;
    constructor(source: AsyncIterable<TSource>, keySelector: (value: TSource, signal?: AbortSignal) => TKey | Promise<TKey>, comparer: (first: TKey, second: TKey) => boolean | Promise<boolean>);
    [Symbol.asyncIterator](signal?: AbortSignal): AsyncGenerator<Awaited<TSource>, void, unknown>;
}
/**
 * Returns an async-iterable sequence that contains only distinct contiguous elements according to the optional keySelector and comparer.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TKey The type of the discriminator key computed for each element in the source sequence.
 * @param {DistinctOptions<TSource, TKey = TSource>} [options] The optional options for adding a key selector and comparer.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator that returns an async-iterable that contains only distinct contiguous items.
 */
export declare function distinctUntilChanged<TSource, TKey = TSource>(options?: DistinctOptions<TSource, TKey>): MonoTypeOperatorAsyncFunction<TSource>;
