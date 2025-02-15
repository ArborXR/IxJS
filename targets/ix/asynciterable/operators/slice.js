"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slice = exports.SliceAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class SliceAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _begin;
    _end;
    constructor(source, begin, end) {
        super();
        this._source = source;
        this._begin = begin;
        this._end = end;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const source = (0, withabort_1.wrapWithAbort)(this._source, signal);
        const it = source[Symbol.asyncIterator]();
        let begin = this._begin;
        let next;
        while (begin > 0 && !(next = await it.next()).done) {
            begin--;
        }
        let end = this._end;
        if (end > 0) {
            while (!(next = await it.next()).done) {
                yield next.value;
                if (--end === 0) {
                    break;
                }
            }
        }
    }
}
exports.SliceAsyncIterable = SliceAsyncIterable;
/**
 * Returns the elements from the source async-iterable sequence only after the function that returns a promise produces an element.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {number} begin Zero-based index at which to begin extraction.
 * @param {number} [end=Infinity] Zero-based index before which to end extraction.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable containing the extracted elements.
 */
function slice(begin, end = Infinity) {
    return function sliceOperatorFunction(source) {
        return new SliceAsyncIterable(source, begin, end);
    };
}
exports.slice = slice;

//# sourceMappingURL=slice.js.map
