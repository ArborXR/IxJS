"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipWhile = exports.SkipWhileAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class SkipWhileAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _predicate;
    constructor(source, predicate) {
        super();
        this._source = source;
        this._predicate = predicate;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let yielding = false;
        let i = 0;
        for await (const element of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            if (!yielding && !(await this._predicate(element, i++, signal))) {
                yielding = true;
            }
            if (yielding) {
                yield element;
            }
        }
    }
}
exports.SkipWhileAsyncIterable = SkipWhileAsyncIterable;
/**
 * Bypasses elements in an async-iterale sequence as long as a specified condition is true
 * and then returns the remaining elements.
 *
 * @template T The type of the elements in the source sequence.
 * @param {((value: T, index: number, signal?: AbortSignal) => boolean | Promise<boolean>)} predicate A function to test each element for a condition.
 * @returns {OperatorAsyncFunction<T, T>} An async-iterable sequence that contains the elements from the input
 * sequence starting at the first element in the linear series that does not pass the test specified by predicate.
 */
function skipWhile(predicate) {
    return function skipWhileOperatorFunction(source) {
        return new SkipWhileAsyncIterable(source, predicate);
    };
}
exports.skipWhile = skipWhile;

//# sourceMappingURL=skipwhile.js.map
