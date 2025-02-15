"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = exports.ThrottleAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class ThrottleAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _time;
    constructor(source, time) {
        super();
        this._source = source;
        this._time = time;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let currentTime;
        let previousTime;
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            currentTime = Date.now();
            if (!previousTime || currentTime - previousTime > this._time) {
                previousTime = currentTime;
                yield item;
            }
        }
    }
}
exports.ThrottleAsyncIterable = ThrottleAsyncIterable;
/**
 * Throttles the source async-iterable sequence so that it doesn't emit more than one value during the given timeframe.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {number} time The time in milliseconds to throttle the source sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The source sequence throttled by the given timeframe.
 */
function throttle(time) {
    return function throttleOperatorFunction(source) {
        return new ThrottleAsyncIterable(source, time);
    };
}
exports.throttle = throttle;

//# sourceMappingURL=throttle.js.map
