"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = void 0;
const comparer_1 = require("../util/comparer");
const identity_1 = require("../util/identity");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Returns the maximum element with the optional selector.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {AsyncIterable<TSource>} source An async-iterable sequence to determine the maximum element of.
 * @param {ExtremaByOptions<TKey>} [options] The options which include an optional comparer and abort signal.
 * @returns {Promise<TResult>} The maximum element.
 */
async function max(source, options) {
    const { ['comparer']: comparer = comparer_1.equalityComparerAsync, ['signal']: signal, ['selector']: selector = identity_1.identityAsync, } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    const it = (0, withabort_1.wrapWithAbort)(source, signal)[Symbol.asyncIterator]();
    let next = await it.next();
    if (next.done) {
        throw new Error('Sequence contains no elements');
    }
    let maxValue = await selector(next.value);
    while (!(next = await it.next()).done) {
        const current = await selector(next.value);
        if ((await comparer(current, maxValue)) > 0) {
            maxValue = current;
        }
    }
    return maxValue;
}
exports.max = max;

//# sourceMappingURL=max.js.map
