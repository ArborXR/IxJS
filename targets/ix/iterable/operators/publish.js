"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publish = void 0;
const iterablex_1 = require("../iterablex");
const _refcountlist_1 = require("./_refcountlist");
const create_1 = require("../create");
class PublishedBuffer extends iterablex_1.IterableX {
    _buffer;
    _source;
    _error;
    _stopped = false;
    constructor(source) {
        super();
        this._source = source;
        this._buffer = new _refcountlist_1.RefCountList(0);
    }
    // eslint-disable-next-line complexity
    *_getIterable(i) {
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
                        if (this._error) {
                            throw this._error;
                        }
                        else {
                            break;
                        }
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
                // eslint-disable-next-line no-param-reassign
                i++;
            }
        }
        finally {
            this._buffer.done();
        }
    }
    [Symbol.iterator]() {
        this._buffer.readerCount++;
        return this._getIterable(this._buffer.count)[Symbol.iterator]();
    }
}
/**
 * Buffer enabling each iterator to retrieve elements from the shared source sequence, starting from the
 * index at the point of obtaining the iterator.
 *
 * @template TSource Source sequence element type.
 * @template TResult Result sequence element type.
 * @param {(value: Iterable<TSource>) => Iterable<TResult>} [selector] Selector function with published
 * access to the source sequence for each iterator.
 * @returns {(OperatorFunction<TSource, TSource | TResult>)} Sequence resulting from applying the selector function to the
 * published view over the source sequence.
 */
function publish(selector) {
    return function publishOperatorFunction(source) {
        return selector
            ? (0, create_1.create)(() => selector(publish()(source))[Symbol.iterator]())
            : new PublishedBuffer(source[Symbol.iterator]());
    };
}
exports.publish = publish;

//# sourceMappingURL=publish.js.map
