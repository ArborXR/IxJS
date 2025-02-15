"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementAt = void 0;
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Returns the element at a specified index in a sequence or undefined if the index is out of range.
 *
 * @template T The type of the elements in the source sequence.
 * @param {AsyncIterable<T>} source async-iterable sequence to return the element from.
 * @param {number} index The zero-based index of the element to retrieve.
 * @param {AbortSignal} [signal] The optional abort signal to be used for cancelling the sequence at any time.
 * @returns {(Promise<T | undefined>)} An async-iterable sequence that produces the element at the specified
 * position in the source sequence, or undefined if the index is outside the bounds of the source sequence.
 */
async function elementAt(source, index, signal) {
    (0, aborterror_1.throwIfAborted)(signal);
    let i = index;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        if (i === 0) {
            return item;
        }
        i--;
    }
    return undefined;
}
exports.elementAt = elementAt;

//# sourceMappingURL=elementat.js.map
