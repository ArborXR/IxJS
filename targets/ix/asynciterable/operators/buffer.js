"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buffer = exports.BufferAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class BufferAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _count;
    _skip;
    constructor(source, count, skip) {
        super();
        this._source = source;
        this._count = count;
        this._skip = skip;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const buffers = [];
        let i = 0;
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            if (i % this._skip === 0) {
                buffers.push([]);
            }
            for (const buff of buffers) {
                buff.push(item);
            }
            if (buffers.length > 0 && buffers[0].length === this._count) {
                yield buffers.shift();
            }
            i++;
        }
        while (buffers.length > 0) {
            yield buffers.shift();
        }
    }
}
exports.BufferAsyncIterable = BufferAsyncIterable;
/**
 * Projects each element of an async-iterable sequence into consecutive non-overlapping
 * buffers which are produced based on element count information.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {number} count The length of each buffer.
 * @param {number} [skip] An optional number of elements to skip between creation of consecutive buffers.
 * @returns {OperatorAsyncFunction<TSource, TSource[]>} An operator which returns anm async-iterable sequence with
 * consecutive non-overlapping buffers based upon element count information.
 */
function buffer(count, skip) {
    let s = skip;
    if (s == null) {
        s = count;
    }
    return function bufferOperatorFunction(source) {
        return new BufferAsyncIterable(source, count, s);
    };
}
exports.buffer = buffer;
/**
 * Projects each element of an async-iterable sequence into consecutive non-overlapping
 * buffers which are produced based on element count information.
 * @param count Length of each buffer.
 * @param skip Number of elements to skip between creation of consecutive buffers.
 */

//# sourceMappingURL=buffer.js.map
