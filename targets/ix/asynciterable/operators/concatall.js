"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatAll = exports.ConcatAllAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class ConcatAllAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        for await (const outer of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            for await (const item of (0, withabort_1.wrapWithAbort)(outer, signal)) {
                yield item;
            }
        }
    }
}
exports.ConcatAllAsyncIterable = ConcatAllAsyncIterable;
/**
 * Concatenates all inner async-iterable sequences, as long as the previous
 * async-iterable sequence terminated successfully.
 *
 * @template T The type of elements in the source sequence.
 * @returns {OperatorAsyncFunction<AsyncIterable<T>, T>} An operator which concatenates all inner async-iterable sources.
 */
function concatAll() {
    return function concatAllOperatorFunction(source) {
        return new ConcatAllAsyncIterable(source);
    };
}
exports.concatAll = concatAll;

//# sourceMappingURL=concatall.js.map
