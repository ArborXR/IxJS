"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSet = void 0;
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Converts the existing async-iterable into a promise which resolves a Set.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {AsyncIterable<TSource>} source The async-iterable to convert into a set.
 * @param {AbortSignal} [signal] An optional abort signal to cancel the operation at any time.
 * @returns {Promise<Set<TSource>>} A promise which contains a Set with all the elements from the async-iterable.
 */
async function toSet(source, signal) {
    (0, aborterror_1.throwIfAborted)(signal);
    const set = new Set();
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        set.add(item);
    }
    return set;
}
exports.toSet = toSet;

//# sourceMappingURL=toset.js.map
