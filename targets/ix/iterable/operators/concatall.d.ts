import { OperatorFunction } from '../../interfaces';
/**
 * Concatenates all inner iterable sequences, as long as the previous
 * iterable sequence terminated successfully.
 *
 * @template T The type of elements in the source sequence.
 * @returns {OperatorFunction<Iterable<T>, T>} An operator which concatenates all inner iterable sources.
 */
export declare function concatAll<T>(): OperatorFunction<Iterable<T>, T>;
