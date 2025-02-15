"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = void 0;
const identity_1 = require("../util/identity");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Computes the average of the async-iterable sequence.
 *
 * @param {AsyncIterable<any>} source source async-iterable sequence to compute the average.
 * @param {AverageOptions<any>} [options] The options for calculating the average.
 * @returns {Promise<number>} A Promise which returns the computed average for the async-iterable sequence.
 */
async function average(source, options) {
    const { ['selector']: selector = identity_1.identityAsync, ['signal']: signal, ['thisArg']: thisArg, } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    let sum = 0;
    let count = 0;
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        sum += await selector.call(thisArg, item, signal);
        count++;
    }
    if (count === 0) {
        throw new Error('Empty collection');
    }
    return sum / count;
}
exports.average = average;

//# sourceMappingURL=average.js.map
