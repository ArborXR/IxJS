"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamp = exports.TimestampAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class TimestampAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            yield { time: Date.now(), value: item };
        }
    }
}
exports.TimestampAsyncIterable = TimestampAsyncIterable;
/**
 * Timestamps each element in an async-iterable sequence using the local system clock.
 *
 * @template TSource The type of the elements in the source sequence.
 * @returns {OperatorAsyncFunction<TSource, Timestamp<TSource>>} An async-iterable sequence with timestamp information on elements.
 */
function timestamp() {
    return function timestampOperatorFunction(source) {
        return new TimestampAsyncIterable(source);
    };
}
exports.timestamp = timestamp;

//# sourceMappingURL=timestamp.js.map
