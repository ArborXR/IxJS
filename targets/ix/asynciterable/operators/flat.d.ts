import { AsyncIterableX } from '../asynciterablex';
declare type Flattened<Arr, Depth extends number> = Depth extends -1 ? FlattenInfinite<Arr> : FlattenWithDepth<Arr, Depth>;
declare type FlattenInfinite<Arr> = Arr extends AsyncIterable<infer T> ? FlattenInfinite<T> : Arr;
declare type FlattenWithDepth<Arr, Depth extends number> = {
    done: Arr;
    recur: Arr extends AsyncIterable<infer T> ? FlattenWithDepth<T, [
        -1,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
    ][Depth]> : Arr;
}[Depth extends -1 ? 'done' : 'recur'];
/**
 * Flattens the nested async-iterable by the given depth.
 *
 * @template T The type of elements in the source sequence.
 * @param {number} [depth=Infinity] The depth to flatten the async-iterable sequence if specified, otherwise infinite.
 * @returns {MonoTypeOperatorAsyncFunction<T>} An operator that flattens the async-iterable sequence.
 */
export declare function flat<D extends number = -1>(depth?: D, concurrent?: number): <T>(source: AsyncIterable<T>) => AsyncIterableX<Flattened<T, D>>;
export {};
