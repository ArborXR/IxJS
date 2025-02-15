"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = exports.catchAll = exports.CatchIterable = void 0;
const iterablex_1 = require("./iterablex");
const returniterator_1 = require("../util/returniterator");
class CatchIterable extends iterablex_1.IterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    *[Symbol.iterator]() {
        let error = null;
        let hasError = false;
        for (const source of this._source) {
            const it = source[Symbol.iterator]();
            error = null;
            hasError = false;
            while (1) {
                let c = {};
                try {
                    const { done, value } = it.next();
                    if (done) {
                        (0, returniterator_1.returnIterator)(it);
                        break;
                    }
                    c = value;
                }
                catch (e) {
                    error = e;
                    hasError = true;
                    (0, returniterator_1.returnIterator)(it);
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
exports.CatchIterable = CatchIterable;
/**
 * Creates a sequence by concatenating source sequences until a source sequence completes successfully.
 * @param {Iterable<Iterable<TSource>>} source Source sequences.
 * @return {Iterable<TSource>} Sequence that continues to concatenate source sequences while errors occur.
 */
function catchAll(source) {
    return new CatchIterable(source);
}
exports.catchAll = catchAll;
/**
 * Creates a sequence by concatenating source sequences until a source sequence completes successfully.
 * @param {...Iterable<TSource>} source Sequence that continues to concatenate source sequences while errors occur.
 * @return {Iterable<TSource>} Sequence that continues to concatenate source sequences while errors occur.
 */
function catchError(...source) {
    return new CatchIterable(source);
}
exports.catchError = catchError;

//# sourceMappingURL=catcherror.js.map
