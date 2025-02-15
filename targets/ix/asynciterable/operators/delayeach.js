"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delayEach = exports.DelayEachAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const _sleep_1 = require("../_sleep");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class DelayEachAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _dueTime;
    constructor(source, dueTime) {
        super();
        this._source = source;
        this._dueTime = dueTime;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            await (0, _sleep_1.sleep)(this._dueTime, signal);
            yield item;
        }
    }
}
exports.DelayEachAsyncIterable = DelayEachAsyncIterable;
/**
 * Delays the emitting of each items in the async-iterable by the given due time.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {number} dueTime The delay duration in milliseconds
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator which takes an async-iterable and delays each item in the sequence by the given time.
 */
function delayEach(dueTime) {
    return function delayEachOperatorFunction(source) {
        return new DelayEachAsyncIterable(source, dueTime);
    };
}
exports.delayEach = delayEach;

//# sourceMappingURL=delayeach.js.map
