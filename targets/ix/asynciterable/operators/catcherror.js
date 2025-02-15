"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = exports.CatchWithAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const returniterator_1 = require("../../util/returniterator");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class CatchWithAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _handler;
    constructor(source, handler) {
        super();
        this._source = source;
        this._handler = handler;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let err;
        let hasError = false;
        const source = (0, withabort_1.wrapWithAbort)(this._source, signal);
        const it = source[Symbol.asyncIterator]();
        while (1) {
            let c = {};
            try {
                c = await it.next();
                if (c.done) {
                    await (0, returniterator_1.returnAsyncIterator)(it);
                    break;
                }
            }
            catch (e) {
                err = await this._handler(e, signal);
                hasError = true;
                await (0, returniterator_1.returnAsyncIterator)(it);
                break;
            }
            yield c.value;
        }
        if (hasError) {
            for await (const item of (0, withabort_1.wrapWithAbort)(err, signal)) {
                yield item;
            }
        }
    }
}
exports.CatchWithAsyncIterable = CatchWithAsyncIterable;
/**
 * Continues an async-iterable sequence that is terminated by an exception with the
 * async-iterable sequence produced by the handler.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TResult The type of elements from the handler function.
 * @param {((
 *     error: any,
 *     signal?: AbortSignal
 *   ) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>)} handler Error handler function, producing another async-iterable sequence.
 * @returns {(OperatorAsyncFunction<TSource, TSource | TResult>)} An operator which continues an async-iterable sequence that is terminated by
 * an exception with the specified handler.
 */
function catchError(handler) {
    return function catchWithOperatorFunction(source) {
        return new CatchWithAsyncIterable(source, handler);
    };
}
exports.catchError = catchError;

//# sourceMappingURL=catcherror.js.map
