"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.min = void 0;
const comparer_1 = require("../util/comparer");
const identity_1 = require("../util/identity");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 *  * Returns the minimum element with the optional selector.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {AsyncIterable<TSource>} source An async-iterable sequence to determine the minimum element of.
 * @param {ExtremaOptions<TSource, TKey>} [options] The options which include an optional comparer and abort signal.
 * @returns {Promise<TSource>} A promise containing the minimum element.
 */
async function min(source, options) {
    const { ['comparer']: comparer = comparer_1.equalityComparerAsync, ['signal']: signal, ['selector']: selector = identity_1.identityAsync, } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    const it = (0, withabort_1.wrapWithAbort)(source, signal)[Symbol.asyncIterator]();
    let next = await it.next();
    if (next.done) {
        throw new Error('Sequence contains no elements');
    }
    let minValue = await selector(next.value);
    while (!(next = await it.next()).done) {
        const current = await selector(next.value);
        if ((await comparer(current, minValue)) < 0) {
            minValue = current;
        }
    }
    return minValue;
}
exports.min = min;

//# sourceMappingURL=min.js.map
