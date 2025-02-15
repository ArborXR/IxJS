"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onErrorResumeNext = exports.OnErrorResumeNextAsyncIterable = void 0;
const asynciterablex_1 = require("./asynciterablex");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
class OnErrorResumeNextAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        for (const item of this._source) {
            const it = (0, withabort_1.wrapWithAbort)(item, signal)[Symbol.asyncIterator]();
            while (1) {
                let next;
                try {
                    next = await it.next();
                }
                catch (e) {
                    break;
                }
                if (next.done) {
                    break;
                }
                yield next.value;
            }
        }
    }
}
exports.OnErrorResumeNextAsyncIterable = OnErrorResumeNextAsyncIterable;
/**
 * Concatenates all of the specified async-iterable sequences, even if the previous async-iterable sequence terminated exceptionally.
 *
 * @template T The type of the elements in the source sequences.
 * @param {...AsyncIterable<T>[]} args Async-iterable sequences to concatenate.
 * @returns {AsyncIterableX<T>} An async-iterable sequence that concatenates the source sequences, even if a sequence terminates exceptionally.
 */
function onErrorResumeNext(...args) {
    return new OnErrorResumeNextAsyncIterable(args);
}
exports.onErrorResumeNext = onErrorResumeNext;

//# sourceMappingURL=onerrorresumenext.js.map
