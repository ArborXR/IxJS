/**
 * Determines whether the given async-iterable is empty.
 *
 * @template T The type of elements in the source sequence.
 * @param {AsyncIterable<T>} source The source async-iterable to determine whether it is empty.
 * @param {AbortSignal} [signal] An optional abort signal to cancel the operation.
 * @returns {Promise<boolean>} Returns a promise containing true if the sequence is empty, otherwise false.
 */
export declare function isEmpty<T>(source: AsyncIterable<T>, signal?: AbortSignal): Promise<boolean>;
