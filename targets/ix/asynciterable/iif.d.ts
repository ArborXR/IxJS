import { AsyncIterableX } from './asynciterablex';
/**
 * If the specified condition evaluates true, select the thenSource sequence.
 * Otherwise, select the elseSource sequence.
 *
 * @template TSource The type of the elements in the result sequence.
 * @param {((signal?: AbortSignal) => boolean | Promise<boolean>)} condition Condition evaluated to decide which sequence to return.
 * @param {AsyncIterable<TSource>} thenSource Sequence returned in case evaluates true.
 * @param {AsyncIterable<TSource>} [elseSource=empty()] Sequence returned in case condition evaluates false.
 * @returns {AsyncIterableX<TSource>} thenSource if condition evaluates true; elseSource otherwise.
 */
export declare function iif<TSource>(condition: (signal?: AbortSignal) => boolean | Promise<boolean>, thenSource: AsyncIterable<TSource>, elseSource?: AsyncIterable<TSource>): AsyncIterableX<TSource>;
