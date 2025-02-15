/**
 *  Determines whether an async-itreable includes a certain value among its entries, returning true or false as appropriate.
 *
 * @template T The type of elements in the source sequence.
 * @param {AsyncIterable<T>} source The source sequence to search for the item.
 * @param {T} valueToFind The value to search for.
 * @param {number} [fromIndex=0] The position in this async-iterable at which to begin searching for valueToFind.
 * @param {AbortSignal} [signal] An optional abort signal to cancel the operation at any time.
 * @returns {Promise<boolean>} Returns a promise containing true if the value valueToFind is found within the async-iterable.
 */
export declare function includes<T>(source: AsyncIterable<T>, valueToFind: T, fromIndex?: number, signal?: AbortSignal): Promise<boolean>;
