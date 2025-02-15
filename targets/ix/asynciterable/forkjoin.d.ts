/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the first source sequence.
 * @template T2 The type of the elements in the second source sequence.
 * @param {AsyncIterable<T>} source First async-iterable source.
 * @param {AsyncIterable<T2>} source2 Second async-iterable source.
 * @returns {(Promise<[T, T2] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
export declare function forkJoin<T, T2>(source: AsyncIterable<T>, source2: AsyncIterable<T2>): Promise<[T, T2] | undefined>;
/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the first source sequence.
 * @template T2 The type of the elements in the second source sequence.
 * @template T3 The type of the elements in the third source sequence.
 * @param {AsyncIterable<T>} source First async-iterable source.
 * @param {AsyncIterable<T2>} source2 Second async-iterable source.
 * @param {AsyncIterable<T3>} source3 Third async-iterable source.
 * @returns {(Promise<[T, T2, T3] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
export declare function forkJoin<T, T2, T3>(source: AsyncIterable<T>, source2: AsyncIterable<T2>, source3: AsyncIterable<T3>): Promise<[T, T2, T3] | undefined>;
/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the first source sequence.
 * @template T2 The type of the elements in the second source sequence.
 * @template T3 The type of the elements in the third source sequence.
 * @template T4 The type of the elements in the fourth source sequence.
 * @param {AsyncIterable<T>} source First async-iterable source.
 * @param {AsyncIterable<T2>} source2 Second async-iterable source.
 * @param {AsyncIterable<T3>} source3 Third async-iterable source.
 * @param {AsyncIterable<T4>} source4 Fourth async-iterable source.
 * @returns {(Promise<[T, T2, T3, T4] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
export declare function forkJoin<T, T2, T3, T4>(source: AsyncIterable<T>, source2: AsyncIterable<T2>, source3: AsyncIterable<T3>, source4: AsyncIterable<T4>): Promise<[T, T2, T3, T4] | undefined>;
/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the first source sequence.
 * @template T2 The type of the elements in the second source sequence.
 * @template T3 The type of the elements in the third source sequence.
 * @template T4 The type of the elements in the fourth source sequence.
 * @template T5 The type of the elements in the fifth source sequence.
 * @param {AsyncIterable<T>} source First async-iterable source.
 * @param {AsyncIterable<T2>} source2 Second async-iterable source.
 * @param {AsyncIterable<T3>} source3 Third async-iterable source.
 * @param {AsyncIterable<T4>} source4 Fourth async-iterable source.
 * @param {AsyncIterable<T5>} source5 Fifth async-iterable source.
 * @returns {(Promise<[T, T2, T3, T4, T5] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
export declare function forkJoin<T, T2, T3, T4, T5>(source: AsyncIterable<T>, source2: AsyncIterable<T2>, source3: AsyncIterable<T3>, source4: AsyncIterable<T4>, source5: AsyncIterable<T5>): Promise<[T, T2, T3, T4, T5] | undefined>;
/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the first source sequence.
 * @template T2 The type of the elements in the second source sequence.
 * @template T3 The type of the elements in the third source sequence.
 * @template T4 The type of the elements in the fourth source sequence.
 * @template T5 The type of the elements in the fifth source sequence.
 * @template T6 The type of the elements in the sixth source sequence.
 * @param {AsyncIterable<T>} source First async-iterable source.
 * @param {AsyncIterable<T2>} source2 Second async-iterable source.
 * @param {AsyncIterable<T3>} source3 Third async-iterable source.
 * @param {AsyncIterable<T4>} source4 Fourth async-iterable source.
 * @param {AsyncIterable<T5>} source5 Fifth async-iterable source.
 * @param {AsyncIterable<T6>} source6 Sixth async-iterable source.
 * @returns {(Promise<[T, T2, T3, T4, T5, T6] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
export declare function forkJoin<T, T2, T3, T4, T5, T6>(source: AsyncIterable<T>, source2: AsyncIterable<T2>, source3: AsyncIterable<T3>, source4: AsyncIterable<T4>, source5: AsyncIterable<T5>, source6: AsyncIterable<T6>): Promise<[T, T2, T3, T4, T5, T6] | undefined>;
/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the first source sequence.
 * @param {AbortSignal} signal An abort signal used for cancellation at any time.
 * @param {AsyncIterable<T>} source First async-iterable source.
 * @returns {(Promise<[T] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
export declare function forkJoin<T>(signal: AbortSignal, source: AsyncIterable<T>): Promise<[T] | undefined>;
/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the first source sequence.
 * @template T2 The type of the elements in the second source sequence.
 * @param {AbortSignal} signal An abort signal used for cancellation at any time.
 * @param {AsyncIterable<T>} source First async-iterable source.
 * @param {AsyncIterable<T2>} source2 Second async-iterable source.
 * @returns {(Promise<[T, T2] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
export declare function forkJoin<T, T2>(signal: AbortSignal, source: AsyncIterable<T>, source2: AsyncIterable<T2>): Promise<[T, T2] | undefined>;
/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the first source sequence.
 * @template T2 The type of the elements in the second source sequence.
 * @template T3 The type of the elements in the third source sequence.
 * @param {AbortSignal} signal An abort signal used for cancellation at any time.
 * @param {AsyncIterable<T>} source First async-iterable source.
 * @param {AsyncIterable<T2>} source2 Second async-iterable source.
 * @param {AsyncIterable<T3>} source3 Third async-iterable source.
 * @returns {(Promise<[T, T2, T3] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
export declare function forkJoin<T, T2, T3>(signal: AbortSignal, source: AsyncIterable<T>, source2: AsyncIterable<T2>, source3: AsyncIterable<T3>): Promise<[T, T2, T3] | undefined>;
/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the first source sequence.
 * @template T2 The type of the elements in the second source sequence.
 * @template T3 The type of the elements in the third source sequence.
 * @template T4 The type of the elements in the fourth source sequence.
 * @param {AbortSignal} signal An abort signal used for cancellation at any time.
 * @param {AsyncIterable<T>} source First async-iterable source.
 * @param {AsyncIterable<T2>} source2 Second async-iterable source.
 * @param {AsyncIterable<T3>} source3 Third async-iterable source.
 * @param {AsyncIterable<T4>} source4 Fourth async-iterable source.
 * @returns {(Promise<[T, T2, T3, T4] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
export declare function forkJoin<T, T2, T3, T4>(signal: AbortSignal, source: AsyncIterable<T>, source2: AsyncIterable<T2>, source3: AsyncIterable<T3>, source4: AsyncIterable<T4>): Promise<[T, T2, T3, T4] | undefined>;
/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the first source sequence.
 * @template T2 The type of the elements in the second source sequence.
 * @template T3 The type of the elements in the third source sequence.
 * @template T4 The type of the elements in the fourth source sequence.
 * @template T5 The type of the elements in the fifth source sequence.
 * @param {AbortSignal} signal An abort signal used for cancellation at any time.
 * @param {AsyncIterable<T>} source First async-iterable source.
 * @param {AsyncIterable<T2>} source2 Second async-iterable source.
 * @param {AsyncIterable<T3>} source3 Third async-iterable source.
 * @param {AsyncIterable<T4>} source4 Fourth async-iterable source.
 * @param {AsyncIterable<T5>} source5 Fifth async-iterable source.
 * @returns {(Promise<[T, T2, T3, T4, T5] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
export declare function forkJoin<T, T2, T3, T4, T5>(signal: AbortSignal, source: AsyncIterable<T>, source2: AsyncIterable<T2>, source3: AsyncIterable<T3>, source4: AsyncIterable<T4>, source5: AsyncIterable<T5>): Promise<[T, T2, T3, T4, T5] | undefined>;
/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the first source sequence.
 * @template T2 The type of the elements in the second source sequence.
 * @template T3 The type of the elements in the third source sequence.
 * @template T4 The type of the elements in the fourth source sequence.
 * @template T5 The type of the elements in the fifth source sequence.
 * @template T6 The type of the elements in the sixth source sequence.
 * @param {AbortSignal} signal An abort signal used for cancellation at any time.
 * @param {AsyncIterable<T>} source First async-iterable source.
 * @param {AsyncIterable<T2>} source2 Second async-iterable source.
 * @param {AsyncIterable<T3>} source3 Third async-iterable source.
 * @param {AsyncIterable<T4>} source4 Fourth async-iterable source.
 * @param {AsyncIterable<T5>} source5 Fifth async-iterable source.
 * @param {AsyncIterable<T6>} source6 Sixth async-iterable source.
 * @returns {(Promise<[T, T2, T3, T4, T5, T6] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
export declare function forkJoin<T, T2, T3, T4, T5, T6>(signal: AbortSignal, source: AsyncIterable<T>, source2: AsyncIterable<T2>, source3: AsyncIterable<T3>, source4: AsyncIterable<T4>, source5: AsyncIterable<T5>, source6: AsyncIterable<T6>): Promise<[T, T2, T3, T4, T5, T6] | undefined>;
/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the source sequences.
 * @param {...AsyncIterable<T>[]} sources The source sequences.
 * @returns {(Promise<T[] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
export declare function forkJoin<T>(...sources: AsyncIterable<T>[]): Promise<T[] | undefined>;
/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the source sequences.
 * @param {AbortSignal} signal An abort signal used for cancellation at any time.
 * @param {...AsyncIterable<T>[]} sources The source sequences.
 * @returns {(Promise<T[] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
export declare function forkJoin<T>(signal: AbortSignal, ...sources: AsyncIterable<T>[]): Promise<T[] | undefined>;
