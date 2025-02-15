"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = exports.DelayAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const _sleep_1 = require("../_sleep");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class DelayAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _dueTime;
    constructor(source, dueTime) {
        super();
        this._source = source;
        this._dueTime = dueTime;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        await (0, _sleep_1.sleep)(this._dueTime, signal);
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            yield item;
        }
    }
}
exports.DelayAsyncIterable = DelayAsyncIterable;
/**
 * Delays the emitting of the first item in the async-iterable by the given due time.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {number} dueTime The delay duration in milliseconds
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator which delays the before the iteration begins.
 */
function delay(dueTime) {
    return function delayOperatorFunction(source) {
        return new DelayAsyncIterable(source, dueTime);
    };
}
exports.delay = delay;

//# sourceMappingURL=delay.js.map
