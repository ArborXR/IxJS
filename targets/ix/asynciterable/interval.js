"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interval = void 0;
const asynciterablex_1 = require("./asynciterablex");
const _sleep_1 = require("./_sleep");
const aborterror_1 = require("../aborterror");
class IntervalAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _dueTime;
    constructor(dueTime) {
        super();
        this._dueTime = dueTime;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let i = 0;
        while (1) {
            await (0, _sleep_1.sleep)(this._dueTime, signal);
            yield i++;
        }
    }
}
/**
 * Produces a new item in an async-iterable at the given interval cycle time.
 *
 * @param {number} dueTime The due time in milliseconds to spawn a new item.
 * @returns {AsyncIterableX<number>} An async-iterable producing values at the specified interval.
 */
function interval(dueTime) {
    return new IntervalAsyncIterable(dueTime);
}
exports.interval = interval;

//# sourceMappingURL=interval.js.map
