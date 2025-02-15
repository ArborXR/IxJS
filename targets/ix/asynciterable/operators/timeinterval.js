"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeInterval = exports.TimeIntervalAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class TimeIntervalAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let last = Date.now();
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            const now = Date.now();
            const span = now - last;
            last = now;
            yield { value: item, elapsed: span };
        }
    }
}
exports.TimeIntervalAsyncIterable = TimeIntervalAsyncIterable;
/**
 * Records the time interval between consecutive elements in an async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @returns {OperatorAsyncFunction<TSource, TimeInterval<TSource>>} An async-iterable sequence with time
 * interval information on elements.
 */
function timeInterval() {
    return function timeIntervalOperatorFunction(source) {
        return new TimeIntervalAsyncIterable(source);
    };
}
exports.timeInterval = timeInterval;

//# sourceMappingURL=timeinterval.js.map
