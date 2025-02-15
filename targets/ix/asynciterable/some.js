"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.some = void 0;
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Determines whether any element of an async-iterable sequence satisfies a condition.
 *
 * @template T The type of the elements in the source sequence.
 * @param {AsyncIterable<T>} source An async-iterable sequence whose elements to apply the predicate to.
 * @param {FindOptions<T, S>} options The options which includes a required predicate, an optional
 * thisArg for binding, and an abort signal for cancellation.
 * @returns {Promise<boolean>} A promise with a boolean determining whether any elements in the source sequence
 * pass the test in the specified predicate.
 */
async function some(source, options) {
    const { ['signal']: signal, ['thisArg']: thisArg, ['predicate']: predicate } = options;
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        if (await predicate.call(thisArg, item, i++, signal)) {
            return true;
        }
    }
    return false;
}
exports.some = some;

//# sourceMappingURL=some.js.map
