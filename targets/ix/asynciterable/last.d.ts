import { OptionalFindOptions } from './findoptions';
/**
 * Returns the last element of an async-iterable sequence that satisfies the condition in the predicate if given
 * otherwise the last item in the sequence, or a default value if no such element exists.
 *
 * @template T The type of elements in the source sequence.
 * @param {AsyncIterable<T>} source The source async-iterable sequence.
 * @param {OptionalFindOptions<T, S>} [options] The options which include an optional predicate for filtering,
 * thirArg for binding, and abort signal for cancellation
 * @returns {(Promise<S | undefined>)} A promise containing the last value that matches the optional predicate or last item, otherwise undefined.
 */
export declare function last<T>(source: AsyncIterable<T>, options?: OptionalFindOptions<T>): Promise<T | undefined>;
