"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publish = void 0;
const _refcountlist_1 = require("../../iterable/operators/_refcountlist");
const create_1 = require("../create");
const memoize_1 = require("./memoize");
const aborterror_1 = require("../../aborterror");
class PublishedAsyncBuffer extends memoize_1.MemoizeAsyncBuffer {
    constructor(source) {
        super(source, new _refcountlist_1.RefCountList(0));
    }
    [Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        this._buffer.readerCount++;
        return this._getIterable(this._buffer.count)[Symbol.asyncIterator]();
    }
}
/**
 * Buffer enabling each iterator to retrieve elements from the shared source sequence, starting from the
 * index at the point of obtaining the iterator.
 *
 * @template TSource Source sequence element type.
 * @template TResult Result sequence element type.
 * @param {(value: AsyncIterable<TSource>) => AsyncIterable<TResult>} [selector] Selector function with published
 * access to the source sequence for each iterator.
 * @returns {(OperatorAsyncFunction<TSource, TSource | TResult>)} Sequence resulting from applying the selector function to the
 * published view over the source sequence.
 */
function publish(selector) {
    return function publishOperatorFunction(source) {
        return selector
            ? (0, create_1.create)(async () => selector(publish()(source))[Symbol.asyncIterator]())
            : new PublishedAsyncBuffer(source[Symbol.asyncIterator]());
    };
}
exports.publish = publish;

//# sourceMappingURL=publish.js.map
