"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalize = exports.FinallyAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class FinallyAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _action;
    constructor(source, action) {
        super();
        this._source = source;
        this._action = action;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        try {
            for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
                yield item;
            }
        }
        finally {
            await this._action();
        }
    }
}
exports.FinallyAsyncIterable = FinallyAsyncIterable;
/**
 *  Invokes a specified asynchronous action after the source async-iterable sequence terminates gracefully or exceptionally.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {(() => void | Promise<void>)} action Action to invoke and await asynchronously after the source async-iterable sequence terminates
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator that returns the source sequence with the
 * action-invoking termination behavior applied.
 */
function finalize(action) {
    return function finalizeOperatorFunction(source) {
        return new FinallyAsyncIterable(source, action);
    };
}
exports.finalize = finalize;

//# sourceMappingURL=finalize.js.map
