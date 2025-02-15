import { IterableX } from '../../iterable/iterablex';
/**
 * @ignore
 */
export declare function concatProto<T>(this: IterableX<T>): IterableX<T>;
/**
 * @ignore
 */
export declare function concatProto<T, T2>(this: IterableX<T>, v2: Iterable<T2>): IterableX<T | T2>;
export declare function concatProto<T, T2, T3>(this: IterableX<T>, v2: Iterable<T2>, v3: Iterable<T3>): IterableX<T | T2 | T3>;
/**
 * @ignore
 */
export declare function concatProto<T, T2, T3, T4>(this: IterableX<T>, v2: Iterable<T2>, v3: Iterable<T3>, v4: Iterable<T4>): IterableX<T | T2 | T3 | T4>;
/**
 * @ignore
 */
export declare function concatProto<T, T2, T3, T4, T5>(this: IterableX<T>, v2: Iterable<T2>, v3: Iterable<T3>, v4: Iterable<T4>, v5: Iterable<T5>): Iterable<T | T2 | T3 | T4 | T5>;
/**
 * @ignore
 */
export declare function concatProto<T, T2, T3, T4, T5, T6>(this: IterableX<T>, v2: Iterable<T2>, v3: Iterable<T3>, v4: Iterable<T4>, v5: Iterable<T5>, v6: Iterable<T6>): Iterable<T | T2 | T3 | T4 | T5 | T6>;
declare module '../../iterable/iterablex' {
    interface IterableX<T> {
        concat: typeof concatProto;
    }
}
