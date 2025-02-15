"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.share = void 0;
const asynciterablex_1 = require("../asynciterablex");
const create_1 = require("../create");
const aborterror_1 = require("../../aborterror");
class SharedAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _it;
    constructor(it) {
        super();
        this._it = {
            next(value) {
                return it.next(value);
            },
        };
    }
    [Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        return this._it;
    }
}
/**
 * Shares the source sequence within a selector function where each iterator can fetch the next element from the
 * source sequence.
 *
 * @template TSource Source sequence element type.
 * @template TResult Result sequence element type.
 * @param {((
 *     value: AsyncIterable<TSource>,
 *     signal?: AbortSignal
 *   ) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>)} [selector] Selector function with shared access
 * to the source sequence for each iterator.
 * @returns {(OperatorAsyncFunction<TSource, TSource | TResult>)} Sequence resulting from applying the selector function to the
 * shared view over the source sequence.
 */
function share(selector) {
    return function shareOperatorFunction(source) {
        return selector
            ? (0, create_1.create)(async (signal) => {
                const it = await selector(new SharedAsyncIterable(source[Symbol.asyncIterator](signal)), signal);
                return it[Symbol.asyncIterator](signal);
            })
            : new SharedAsyncIterable(source[Symbol.asyncIterator]());
    };
}
exports.share = share;

//# sourceMappingURL=share.js.map
