"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeWhile = exports.TakeWhileAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class TakeWhileAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _predicate;
    constructor(source, predicate) {
        super();
        this._source = source;
        this._predicate = predicate;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let i = 0;
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            if (!(await this._predicate(item, i++, signal))) {
                break;
            }
            yield item;
        }
    }
}
exports.TakeWhileAsyncIterable = TakeWhileAsyncIterable;
/**
 * Returns elements from an async-iterable sequence as long as a specified condition is true.
 *
 * @template T The type of the elements in the source sequence.
 * @param {((value: T, index: number, signal?: AbortSignal) => boolean | Promise<boolean>)} predicate A function to test each element for a condition.
 * @returns {OperatorAsyncFunction<T, T>} An async-iterable sequence that contains the elements from the input sequence that occur
 * before the element at which the test no longer passes.
 */
function takeWhile(predicate) {
    return function takeWhileOperatorFunction(source) {
        return new TakeWhileAsyncIterable(source, predicate);
    };
}
exports.takeWhile = takeWhile;

//# sourceMappingURL=takewhile.js.map
