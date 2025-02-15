"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = exports.catchAll = exports.CatchAllAsyncIterable = void 0;
const asynciterablex_1 = require("./asynciterablex");
const returniterator_1 = require("../util/returniterator");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
class CatchAllAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let error = null;
        let hasError = false;
        for (const source of this._source) {
            const it = (0, withabort_1.wrapWithAbort)(source, signal)[Symbol.asyncIterator]();
            error = null;
            hasError = false;
            while (1) {
                let c = {};
                try {
                    const { done, value } = await it.next();
                    if (done) {
                        await (0, returniterator_1.returnAsyncIterator)(it);
                        break;
                    }
                    c = value;
                }
                catch (e) {
                    error = e;
                    hasError = true;
                    await (0, returniterator_1.returnAsyncIterator)(it);
                    break;
                }
                yield c;
            }
            if (!hasError) {
                break;
            }
        }
        if (hasError) {
            throw error;
        }
    }
}
exports.CatchAllAsyncIterable = CatchAllAsyncIterable;
/**
 * Continues an async-iterable sequence that is terminated by an exception with the next async-iterable sequence.
 *
 * @template T The type of the elements in the source and handler sequences.
 * @param {Iterable<AsyncIterable<T>>} source async-iterable sequences to catch exceptions for.
 * @returns {AsyncIterableX<T>} An async-iterable sequence containing elements from consecutive source
 * sequences until a source sequence terminates successfully.
 */
function catchAll(source) {
    return new CatchAllAsyncIterable(source);
}
exports.catchAll = catchAll;
/**
 * Continues an async-iterable sequence that is terminated by an exception with the next async-iterable sequence.
 *
 * @template T The type of the elements in the source and handler sequences.
 * @param {...AsyncIterable<T>[]} args async-iterable sequences to catch exceptions for.
 * @returns {AsyncIterableX<T>} An async-iterable sequence containing elements from consecutive source
 * sequences until a source sequence terminates successfully.
 */
function catchError(...args) {
    return new CatchAllAsyncIterable(args);
}
exports.catchError = catchError;

//# sourceMappingURL=catcherror.js.map
