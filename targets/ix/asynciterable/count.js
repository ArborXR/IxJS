"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Returns a promise that represents how many elements in the specified async-iterable sequence satisfy a condition
 * otherwise, the number of items in the sequence.
 *
 * @template T The type of elements in the source collection.
 * @param {AsyncIterable<T>} source An async-iterable sequence that contains elements to be counted.
 * @param {OptionalFindOptions<T>} [options] The options for a predicate for filtering, thisArg for binding and AbortSignal for cancellation.
 * @returns {Promise<number>} The number of matching elements for the given condition if provided, otherwise
 * the number of elements in the sequence.
 */
async function count(source, options) {
    const { ['signal']: signal, ['thisArg']: thisArg, ['predicate']: predicate = async () => true } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        if (await predicate.call(thisArg, item, i, signal)) {
            i++;
        }
    }
    return i;
}
exports.count = count;

//# sourceMappingURL=count.js.map
