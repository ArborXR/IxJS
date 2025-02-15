"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pairwise = exports.PairwiseAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class PairwiseAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let value;
        let hasValue = false;
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            if (!hasValue) {
                hasValue = true;
            }
            else {
                yield [value, item];
            }
            value = item;
        }
    }
}
exports.PairwiseAsyncIterable = PairwiseAsyncIterable;
/**
 * Returns a sequence of each element in the input sequence and its predecessor, with the exception of the
 * first element which is only returned as the predecessor of the second element.
 *
 * @template TSource The type of the elements in the source sequence.
 * @returns {OperatorAsyncFunction<TSource, TSource[]>} The result sequence.
 */
function pairwise() {
    return function pairwiseOperatorFunction(source) {
        return new PairwiseAsyncIterable(source);
    };
}
exports.pairwise = pairwise;

//# sourceMappingURL=pairwise.js.map
