"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retry = void 0;
const repeatvalue_1 = require("../../iterable/repeatvalue");
const catcherror_1 = require("../catcherror");
/**
 * Retries the async-iterable instance the number of given times. If not supplied, it will try infinitely.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {number} [count=-1] An optional number of times to retry, otherwise is set to infinite retries
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence producing the elements of the
 * given sequence repeatedly until it terminates successfully.
 */
function retry(count = -1) {
    return function retryOperatorFunction(source) {
        return new catcherror_1.CatchAllAsyncIterable((0, repeatvalue_1.repeatValue)(source, count));
    };
}
exports.retry = retry;

//# sourceMappingURL=retry.js.map
