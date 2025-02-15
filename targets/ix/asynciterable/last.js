"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = void 0;
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Returns the last element of an async-iterable sequence that satisfies the condition in the predicate if given
 * otherwise the last item in the sequence, or a default value if no such element exists.
 *
 * @template T The type of elements in the source sequence.
 * @param {AsyncIterable<T>} source The source async-iterable sequence.
 * @param {OptionalFindOptions<T, S>} [options] The options which include an optional predicate for filtering,
 * thirArg for binding, and abort signal for cancellation
 * @returns {(Promise<S | undefined>)} A promise containing the last value that matches the optional predicate or last item, otherwise undefined.
 */
async function last(source, options) {
    const { ['signal']: signal, ['thisArg']: thisArg, ['predicate']: predicate = async () => true } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    let i = 0;
    let result;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        if (await predicate.call(thisArg, item, i++, signal)) {
            result = item;
        }
    }
    return result;
}
exports.last = last;

//# sourceMappingURL=last.js.map
