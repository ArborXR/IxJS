"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIndex = void 0;
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Returns the a Promise containing the index of the first element in the array that satisfies the provided testing function.
 * Otherwise, it returns a Promise with -1, indicating that no element passed the test.
 *
 * @template T The type of the elements in the source sequence.
 * @param {AsyncIterable<T>} source An async-iterable sequence whose elements to apply the predicate to.
 * @param {FindOptions<T>} options The options for a predicate for filtering, thisArg for binding and AbortSignal for cancellation.
 * @returns {Promise<number>} A promise containing the index of the first element in the array that passes the test. Otherwise, -1.
 */
async function findIndex(source, options) {
    const { ['signal']: signal, ['thisArg']: thisArg, ['predicate']: predicate } = options;
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        if (await predicate.call(thisArg, item, i++, signal)) {
            return i;
        }
    }
    return -1;
}
exports.findIndex = findIndex;

//# sourceMappingURL=findindex.js.map
