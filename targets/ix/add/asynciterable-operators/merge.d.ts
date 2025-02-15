import { AsyncIterableX } from '../../asynciterable/asynciterablex';
/**
 * @ignore
 */
export declare function mergeProto<T>(this: AsyncIterableX<T>): AsyncIterableX<T>;
/**
 * @ignore
 */
export declare function mergeProto<T, T2>(this: AsyncIterableX<T>, v2: AsyncIterable<T2>): AsyncIterableX<T | T2>;
/**
 * @ignore
 */
export declare function mergeProto<T, T2, T3>(this: AsyncIterableX<T>, v2: AsyncIterable<T2>, v3: AsyncIterable<T3>): AsyncIterableX<T | T2 | T3>;
/**
 * @ignore
 */
export declare function mergeProto<T, T2, T3, T4>(this: AsyncIterableX<T>, v2: AsyncIterable<T2>, v3: AsyncIterable<T3>, v4: AsyncIterable<T4>): AsyncIterableX<T | T2 | T3 | T4>;
/**
 * @ignore
 */
export declare function mergeProto<T, T2, T3, T4, T5>(this: AsyncIterableX<T>, v2: AsyncIterable<T2>, v3: AsyncIterable<T3>, v4: AsyncIterable<T4>, v5: AsyncIterable<T5>): AsyncIterable<T | T2 | T3 | T4 | T5>;
/**
 * @ignore
 */
export declare function mergeProto<T, T2, T3, T4, T5, T6>(this: AsyncIterableX<T>, v2: AsyncIterable<T2>, v3: AsyncIterable<T3>, v4: AsyncIterable<T4>, v5: AsyncIterable<T5>, v6: AsyncIterable<T6>): AsyncIterable<T | T2 | T3 | T4 | T5 | T6>;
declare module '../../asynciterable/asynciterablex' {
    interface AsyncIterableX<T> {
        merge: typeof mergeProto;
    }
}
