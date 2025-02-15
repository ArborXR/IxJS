import { OperatorFunction } from '../interfaces';
import { IterableX } from './iterablex';
export declare function pipe<T>(source: Iterable<T>): IterableX<T>;
export declare function pipe<T, A>(source: Iterable<T>, op1: OperatorFunction<T, A>): IterableX<A>;
export declare function pipe<T, A, B>(source: Iterable<T>, op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>): IterableX<B>;
export declare function pipe<T, A, B, C>(source: Iterable<T>, op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>): IterableX<C>;
export declare function pipe<T, A, B, C, D>(source: Iterable<T>, op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>): IterableX<D>;
export declare function pipe<T, A, B, C, D, E>(source: Iterable<T>, op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>): IterableX<E>;
export declare function pipe<T, A, B, C, D, E, F>(source: Iterable<T>, op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>): IterableX<F>;
export declare function pipe<T, A, B, C, D, E, F, G>(source: Iterable<T>, op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>): IterableX<G>;
export declare function pipe<T, A, B, C, D, E, F, G, H>(source: Iterable<T>, op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>, op8: OperatorFunction<G, H>): IterableX<H>;
export declare function pipe<T, A, B, C, D, E, F, G, H, I>(source: Iterable<T>, op1: OperatorFunction<T, A>, op2: OperatorFunction<A, B>, op3: OperatorFunction<B, C>, op4: OperatorFunction<C, D>, op5: OperatorFunction<D, E>, op6: OperatorFunction<E, F>, op7: OperatorFunction<F, G>, op8: OperatorFunction<G, H>, op9: OperatorFunction<H, I>): IterableX<I>;
