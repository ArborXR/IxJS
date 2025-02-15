"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
const iterablex_1 = require("../iterablex");
const _refcountlist_1 = require("./_refcountlist");
const create_1 = require("../create");
class MemoizeBuffer extends iterablex_1.IterableX {
    _source;
    _buffer;
    _error;
    _stopped = false;
    constructor(source, buffer) {
        super();
        this._source = source;
        this._buffer = buffer;
    }
    // eslint-disable-next-line complexity
    *[Symbol.iterator]() {
        let i = 0;
        try {
            while (1) {
                let hasValue = false;
                let current = {};
                if (i >= this._buffer.count) {
                    if (!this._stopped) {
                        try {
                            const next = this._source.next();
                            hasValue = !next.done;
                            // eslint-disable-next-line max-depth
                            if (hasValue) {
                                current = next.value;
                            }
                        }
                        catch (e) {
                            this._error = e;
                            this._stopped = true;
                        }
                    }
                    if (this._stopped) {
                        throw this._error;
                    }
                    if (hasValue) {
                        this._buffer.push(current);
                    }
                }
                else {
                    hasValue = true;
                }
                if (hasValue) {
                    yield this._buffer.get(i);
                }
                else {
                    break;
                }
                i++;
            }
        }
        finally {
            this._buffer.done();
        }
    }
}
/**
 * Memoizes the source sequence within a selector function where a specified number of iterators can get access
 * to all of the sequence's elements without causing multiple iterations over the source.
 *
 * @template TSource Source sequence element type.
 * @template TResult Result sequence element type.
 * @param {number} [readerCount=-1] Number of iterators that can access the underlying buffer. Once every
 * iterator has obtained an element from the buffer, the element is removed from the buffer.
 * @param {(value: Iterable<TSource>) => Iterable<TResult>} [selector] Selector function with memoized access
 * to the source sequence for a specified number of iterators.
 * @returns {(OperatorFunction<TSource, TSource | TResult>)} Sequence resulting from applying the selector function to the
 * memoized view over the source sequence.
 */
function memoize(readerCount = -1, selector) {
    return function memoizeOperatorFunction(source) {
        if (!selector) {
            return readerCount === -1
                ? new MemoizeBuffer(source[Symbol.iterator](), new _refcountlist_1.MaxRefCountList())
                : new MemoizeBuffer(source[Symbol.iterator](), new _refcountlist_1.RefCountList(readerCount));
        }
        return (0, create_1.create)(() => selector(memoize(readerCount)(source))[Symbol.iterator]());
    };
}
exports.memoize = memoize;

//# sourceMappingURL=memoize.js.map
