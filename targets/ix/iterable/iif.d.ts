import { IterableX } from './iterablex';
/**
 * If the specified condition evaluates true, select the thenSource sequence.
 * Otherwise, select the elseSource sequence.
 *
 * @template TSource The type of the elements in the result sequence.
 * @param {(() => boolean)} condition Condition evaluated to decide which sequence to return.
 * @param {Iterable<TSource>} thenSource Sequence returned in case evaluates true.
 * @param {Iterable<TSource>} [elseSource=empty()] Sequence returned in case condition evaluates false.
 * @returns {IterableX<TSource>} thenSource if condition evaluates true; elseSource otherwise.
 */
export declare function iif<TSource>(fn: () => boolean, thenSource: Iterable<TSource>, elseSource?: Iterable<TSource>): IterableX<TSource>;
