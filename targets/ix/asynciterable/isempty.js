"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Determines whether the given async-iterable is empty.
 *
 * @template T The type of elements in the source sequence.
 * @param {AsyncIterable<T>} source The source async-iterable to determine whether it is empty.
 * @param {AbortSignal} [signal] An optional abort signal to cancel the operation.
 * @returns {Promise<boolean>} Returns a promise containing true if the sequence is empty, otherwise false.
 */
async function isEmpty(source, signal) {
    (0, aborterror_1.throwIfAborted)(signal);
    for await (const _ of (0, withabort_1.wrapWithAbort)(source, signal)) {
        return false;
    }
    return true;
}
exports.isEmpty = isEmpty;

//# sourceMappingURL=isempty.js.map
