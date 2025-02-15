"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = void 0;
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Returns the value of the first element in the provided async-iterable that satisfies the provided testing function.
 *
 * @template T The type of the elements in the source sequence.
 * @param {AsyncIterable<T>} source An async-iterable sequence whose elements to apply the predicate to.
 * @param {FindOptions<T>} options The options for a predicate for filtering, thisArg for binding and AbortSignal for cancellation.
 * @returns {(Promise<S | undefined>)} A promise with the value of the first element that matches the predicate.
 */
async function find(source, options) {
    const { ['signal']: signal, ['thisArg']: thisArg, ['predicate']: predicate } = options;
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        if (await predicate.call(thisArg, item, i++, signal)) {
            return item;
        }
    }
    return undefined;
}
exports.find = find;

//# sourceMappingURL=find.js.map
