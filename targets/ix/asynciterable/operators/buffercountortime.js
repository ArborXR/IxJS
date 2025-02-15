"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferCountOrTime = void 0;
const __1 = require("../");
const map_1 = require("./map");
const merge_1 = require("../merge");
const withabort_1 = require("./withabort");
const timerEvent = {};
const ended = {};
class BufferCountOrTime extends __1.AsyncIterableX {
    source;
    bufferSize;
    maxWaitTime;
    constructor(source, bufferSize, maxWaitTime) {
        super();
        this.source = source;
        this.bufferSize = bufferSize;
        this.maxWaitTime = maxWaitTime;
    }
    async *[Symbol.asyncIterator](signal) {
        const buffer = [];
        const timer = (0, __1.interval)(this.maxWaitTime).pipe((0, map_1.map)(() => timerEvent));
        const source = (0, __1.concat)(this.source, (0, __1.of)(ended));
        const merged = (0, merge_1.merge)(source, timer);
        for await (const item of (0, withabort_1.wrapWithAbort)(merged, signal)) {
            if (item === ended) {
                break;
            }
            if (item !== timerEvent) {
                buffer.push(item);
            }
            if (buffer.length >= this.bufferSize || (buffer.length && item === timerEvent)) {
                yield buffer.slice();
                buffer.length = 0;
            }
        }
        if (buffer.length) {
            yield buffer;
        }
    }
}
/**
 * Projects each element of an async-iterable sequence into consecutive buffers
 * which are emitted when either the threshold count or time is met.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {number} count The size of the buffer.
 * @param {number} time The threshold number of milliseconds to wait before flushing a non-full buffer
 * @returns {OperatorAsyncFunction<TSource, TSource[]>} An operator which returns an async-iterable sequence
 * of buffers
 */
function bufferCountOrTime(count, time) {
    return function bufferOperatorFunction(source) {
        return new BufferCountOrTime(source, count, time);
    };
}
exports.bufferCountOrTime = bufferCountOrTime;

//# sourceMappingURL=buffercountortime.js.map
