"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = exports._concatAll = exports.ConcatAsyncIterable = void 0;
const asynciterablex_1 = require("./asynciterablex");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
class ConcatAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        for (const outer of this._source) {
            for await (const item of (0, withabort_1.wrapWithAbort)(outer, signal)) {
                yield item;
            }
        }
    }
}
exports.ConcatAsyncIterable = ConcatAsyncIterable;
function _concatAll(source) {
    return new ConcatAsyncIterable(source);
}
exports._concatAll = _concatAll;
/**
 * Concatenates all async-iterable sequences in the given sequences, as long as the previous async-iterable
 * sequence terminated successfully.
 *
 * @template T The type of the elements in the sequences.
 * @param {...AsyncIterable<T>[]} args The async-iterable sources.
 * @returns {AsyncIterableX<T>} An async-iterable sequence that contains the elements of each given sequence, in sequential order.
 */
function concat(...args) {
    return new ConcatAsyncIterable(args);
}
exports.concat = concat;

//# sourceMappingURL=concat.js.map
