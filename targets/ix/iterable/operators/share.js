"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.share = void 0;
const iterablex_1 = require("../iterablex");
const create_1 = require("../create");
class SharedIterable extends iterablex_1.IterableX {
    _it;
    constructor(it) {
        super();
        this._it = {
            next(value) {
                return it.next(value);
            },
        };
    }
    [Symbol.iterator]() {
        return this._it;
    }
}
/**
 * Shares the source sequence within a selector function where each iterator can fetch the next element from the
 * source sequence.
 *
 * @template TSource Source sequence element type.
 * @template TResult Result sequence element type.
 * @param {((value: Iterable<TSource>) => Iterable<TResult>)} [selector] Selector function with shared access
 * to the source sequence for each iterator.
 * @returns {(OperatorFunction<TSource, TSource | TResult>)} Sequence resulting from applying the selector function to the
 * shared view over the source sequence.
 */
function share(selector) {
    return function shareOperatorFunction(source) {
        return selector
            ? (0, create_1.create)(() => selector(new SharedIterable(source[Symbol.iterator]()))[Symbol.iterator]())
            : new SharedIterable(source[Symbol.iterator]());
    };
}
exports.share = share;

//# sourceMappingURL=share.js.map
