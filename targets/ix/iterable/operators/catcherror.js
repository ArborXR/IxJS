"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = exports.CatchWithIterable = void 0;
const iterablex_1 = require("../iterablex");
const returniterator_1 = require("../../util/returniterator");
class CatchWithIterable extends iterablex_1.IterableX {
    _source;
    _handler;
    constructor(source, handler) {
        super();
        this._source = source;
        this._handler = handler;
    }
    *[Symbol.iterator]() {
        let err;
        let hasError = false;
        const it = this._source[Symbol.iterator]();
        while (1) {
            let done;
            let value;
            try {
                ({ done, value } = it.next());
                if (done) {
                    (0, returniterator_1.returnIterator)(it);
                    break;
                }
            }
            catch (e) {
                err = this._handler(e);
                hasError = true;
                (0, returniterator_1.returnIterator)(it);
                break;
            }
            yield value;
        }
        if (hasError) {
            for (const item of err) {
                yield item;
            }
        }
    }
}
exports.CatchWithIterable = CatchWithIterable;
/**
 * Continues an async-iterable sequence that is terminated by an exception with the
 * async-iterable sequence produced by the handler.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TResult The type of elements from the handler function.
 * @param {(error: any) => Iterable<TResult>} handler Error handler function, producing another async-iterable sequence.
 * @returns {(OperatorFunction<TSource, TSource | TResult>)} An operator which continues an async-iterable sequence that is terminated by
 * an exception with the specified handler.
 */
function catchError(handler) {
    return function catchWithOperatorFunction(source) {
        return new CatchWithIterable(source, handler);
    };
}
exports.catchError = catchError;

//# sourceMappingURL=catcherror.js.map
