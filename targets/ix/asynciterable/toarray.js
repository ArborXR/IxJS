"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArray = void 0;
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Converts an existing async-iterable to a promise containing the array of values.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {AsyncIterable<TSource>} source The source sequence to convert to an array.
 * @param {AbortSignal} [signal] An optional abort signal to cancel the operation at any time.
 * @returns {Promise<TSource[]>} A promise containing all the items from the source sequence as an array.
 */
async function toArray(source, signal) {
    (0, aborterror_1.throwIfAborted)(signal);
    const results = [];
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        results.push(item);
    }
    return results;
}
exports.toArray = toArray;

//# sourceMappingURL=toarray.js.map
