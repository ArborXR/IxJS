"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
const identity_1 = require("../util/identity");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Computes the sum of a sequence of values.
 *
 * @param {AsyncIterable<any>} source A sequence of values to calculate the sum.
 * @param {MathOptions<any>} [options] Optional options for providing a selector, thisArg and abort signal.
 * @returns {Promise<number>} A promise containing the sum of the sequence of values.
 */
async function sum(source, options) {
    const { ['selector']: selector = identity_1.identityAsync, ['signal']: signal, ['thisArg']: thisArg, } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    let value = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        value += await selector.call(thisArg, item, signal);
    }
    return value;
}
exports.sum = sum;

//# sourceMappingURL=sum.js.map
