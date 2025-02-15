"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = void 0;
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Applies an accumulator function over an async-iterable sequence, returning the result of the aggregation as a
 * single element in the result sequence. The seed value, if specified, is used as the initial accumulator value.
 * For aggregation behavior with incremental intermediate results, scan.
 *
 * @template T The type of the elements in the source sequence.
 * @template R The type of the result of the aggregation.
 * @param {AsyncIterable<T>} source An async-iterable sequence to aggregate over.
 * @param {ReduceOptions<T, R>} options The options which contains a callback, with optional seedn and an optional abort signal for cancellation.
 * @returns {Promise<R>} A promise with the final accumulator value.
 */
async function reduce(source, options) {
    const { ['seed']: seed, ['signal']: signal, ['callback']: callback } = options;
    const hasSeed = options.hasOwnProperty('seed');
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    let hasValue = false;
    let acc = seed;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        if (hasValue || (hasValue = hasSeed)) {
            acc = await callback(acc, item, i++, signal);
        }
        else {
            acc = item;
            hasValue = true;
            i++;
        }
    }
    if (!(hasSeed || hasValue)) {
        throw new Error('Sequence contains no elements');
    }
    return acc;
}
exports.reduce = reduce;

//# sourceMappingURL=reduce.js.map
