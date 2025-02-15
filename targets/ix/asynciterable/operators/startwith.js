"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startWith = exports.StartWithAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class StartWithAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _args;
    constructor(source, args) {
        super();
        this._source = source;
        this._args = args;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        for (const x of this._args) {
            yield x;
        }
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            yield item;
        }
    }
}
exports.StartWithAsyncIterable = StartWithAsyncIterable;
/**
 * Prepend a value to an async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {...TSource[]} args Elements to prepend to the specified sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The source sequence prepended with the specified values.
 */
function startWith(...args) {
    return function startWithOperatorFunction(source) {
        return new StartWithAsyncIterable(source, args);
    };
}
exports.startWith = startWith;

//# sourceMappingURL=startwith.js.map
