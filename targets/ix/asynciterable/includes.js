"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includes = void 0;
const comparer_1 = require("../util/comparer");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 *  Determines whether an async-itreable includes a certain value among its entries, returning true or false as appropriate.
 *
 * @template T The type of elements in the source sequence.
 * @param {AsyncIterable<T>} source The source sequence to search for the item.
 * @param {T} valueToFind The value to search for.
 * @param {number} [fromIndex=0] The position in this async-iterable at which to begin searching for valueToFind.
 * @param {AbortSignal} [signal] An optional abort signal to cancel the operation at any time.
 * @returns {Promise<boolean>} Returns a promise containing true if the value valueToFind is found within the async-iterable.
 */
async function includes(source, valueToFind, fromIndex = 0, signal) {
    (0, aborterror_1.throwIfAborted)(signal);
    let fromIdx = fromIndex;
    let i = 0;
    if (Math.abs(fromIdx)) {
        fromIdx = 0;
    }
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        if (i++ > fromIdx && (0, comparer_1.comparer)(item, valueToFind)) {
            return true;
        }
    }
    return false;
}
exports.includes = includes;

//# sourceMappingURL=includes.js.map
