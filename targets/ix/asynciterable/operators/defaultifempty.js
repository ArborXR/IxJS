"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultIfEmpty = exports.DefaultIfEmptyAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class DefaultIfEmptyAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _defaultValue;
    constructor(source, defaultValue) {
        super();
        this._source = source;
        this._defaultValue = defaultValue;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let state = 1;
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            state = 2;
            yield item;
        }
        if (state === 1) {
            yield this._defaultValue;
        }
    }
}
exports.DefaultIfEmptyAsyncIterable = DefaultIfEmptyAsyncIterable;
/**
 * Returns the elements of the specified sequence or the default value in a singleton sequence
 * if the sequence is empty.
 *
 * @template T The type of elements in the source sequence.
 * @param {T} defaultValue The value to return if the sequence is empty.
 * @returns {MonoTypeOperatorAsyncFunction<T>} An operator which returns the elements of the source sequence or the default value as a singleton.
 */
function defaultIfEmpty(defaultValue) {
    return function defaultIfEmptyOperatorFunction(source) {
        return new DefaultIfEmptyAsyncIterable(source, defaultValue);
    };
}
exports.defaultIfEmpty = defaultIfEmpty;

//# sourceMappingURL=defaultifempty.js.map
