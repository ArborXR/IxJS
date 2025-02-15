"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.every = void 0;
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Determines whether all elements of an async-iterable sequence satisfy a condition.
 *
 * @template T The type of the elements in the source sequence.
 * @param {AsyncIterable<T>} source An async-iterable sequence whose elements to apply the predicate to.
 * @param {FindOptions<T>} options The options for a predicate for filtering, thisArg for binding and AbortSignal for cancellation.
 * @returns {Promise<boolean>} An async-iterable sequence containing a single element determining whether all elements in the
 * source sequence pass the test in the specified predicate.
 */
async function every(source, options) {
    const { ['signal']: signal, ['thisArg']: thisArg, ['predicate']: predicate } = options;
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        if (!(await predicate.call(thisArg, item, i++, signal))) {
            return false;
        }
    }
    return true;
}
exports.every = every;

//# sourceMappingURL=every.js.map
