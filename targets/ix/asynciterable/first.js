"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.first = void 0;
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Returns the first element of an async-iterable sequence that matches the predicate if provided, or undefined if no such element exists.
 *
 * @template T The type of the elements in the source sequence.
 * @param {AsyncIterable<T>} source Source async-enumerable sequence.
 * @returns {(Promise<S | undefined>)} A Promise containing the first element in the async-iterable sequence,
 * or a default value if no such element exists.
 */
async function first(source, options) {
    const { ['signal']: signal, ['thisArg']: thisArg, ['predicate']: predicate = async () => true } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        if (await predicate.call(thisArg, item, i++, signal)) {
            return item;
        }
    }
    return undefined;
}
exports.first = first;

//# sourceMappingURL=first.js.map
