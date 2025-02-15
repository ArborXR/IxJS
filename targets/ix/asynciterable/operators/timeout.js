"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = exports.TimeoutAsyncIterable = exports.TimeoutError = void 0;
const asynciterablex_1 = require("../asynciterablex");
const _sleep_1 = require("../_sleep");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
const isiterable_1 = require("../../util/isiterable");
const safeRace_1 = require("../../util/safeRace");
class TimeoutError extends Error {
    constructor(message = 'Timeout has occurred') {
        super(message);
        Object.setPrototypeOf(this, TimeoutError.prototype);
        Error.captureStackTrace(this, this.constructor);
        this.name = 'TimeoutError';
    }
    get [Symbol.toStringTag]() {
        return 'TimeoutError';
    }
}
exports.TimeoutError = TimeoutError;
Object.defineProperty(TimeoutError, Symbol.hasInstance, {
    writable: true,
    configurable: true,
    value(x) {
        return ((0, isiterable_1.isObject)(x) &&
            (x.constructor.name === 'TimeoutError' || x[Symbol.toStringTag] === 'TimeoutError'));
    },
});
const VALUE_TYPE = 'value';
const ERROR_TYPE = 'error';
class TimeoutAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _dueTime;
    constructor(source, dueTime) {
        super();
        this._source = source;
        this._dueTime = dueTime;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const it = (0, withabort_1.wrapWithAbort)(this._source, signal)[Symbol.asyncIterator]();
        while (1) {
            const { type, value } = await (0, safeRace_1.safeRace)([
                it.next().then((val) => {
                    return { type: VALUE_TYPE, value: val };
                }),
                (0, _sleep_1.sleep)(this._dueTime, signal).then(() => {
                    return { type: ERROR_TYPE };
                }),
            ]);
            if (type === ERROR_TYPE) {
                throw new TimeoutError();
            }
            if (!value || value.done) {
                break;
            }
            yield value.value;
        }
    }
}
exports.TimeoutAsyncIterable = TimeoutAsyncIterable;
/**
 * Applies a timeout policy for each element in the async-iterable sequence.
 * If the next element isn't received within the specified timeout duration starting from its predecessor, a TimeoutError is thrown.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {number} dueTime Maximum duration in milliseconds between values before a timeout occurs.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The source sequence with a TimeoutError in case of a timeout.
 */
function timeout(dueTime) {
    return function timeoutOperatorFunction(source) {
        return new TimeoutAsyncIterable(source, dueTime);
    };
}
exports.timeout = timeout;

//# sourceMappingURL=timeout.js.map
