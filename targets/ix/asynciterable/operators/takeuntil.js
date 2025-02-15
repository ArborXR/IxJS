"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeUntil = exports.TakeUntilAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
const safeRace_1 = require("../../util/safeRace");
const DONE_PROMISE_VALUE = undefined;
class TakeUntilAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _other;
    constructor(source, other) {
        super();
        this._source = source;
        this._other = other;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const donePromise = this._other(signal).then(() => DONE_PROMISE_VALUE);
        const itemsAsyncIterator = (0, withabort_1.wrapWithAbort)(this._source, signal)[Symbol.asyncIterator]();
        for (;;) {
            const itemPromise = itemsAsyncIterator.next();
            const result = await (0, safeRace_1.safeRace)([donePromise, itemPromise]);
            if (result === DONE_PROMISE_VALUE || result.done) {
                break;
            }
            yield result.value;
        }
    }
}
exports.TakeUntilAsyncIterable = TakeUntilAsyncIterable;
/**
 * Returns the elements from the source async-iterable sequence until the other function
 * that returns a promise produces an element.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {(signal?: AbortSignal) => Promise<any>} other A function that terminates the propagation of
 * elements in the source sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable sequence containing the elements of the
 * source sequence up to the point the other function which returns a promise interrupted further propagation.
 */
function takeUntil(other) {
    return function takeUntilOperatorFunction(source) {
        return new TakeUntilAsyncIterable(source, other);
    };
}
exports.takeUntil = takeUntil;

//# sourceMappingURL=takeuntil.js.map
