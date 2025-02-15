"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scan = exports.ScanAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class ScanAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _fn;
    _seed;
    _hasSeed;
    constructor(source, options) {
        super();
        this._source = source;
        this._fn = options['callback'];
        this._hasSeed = options.hasOwnProperty('seed');
        this._seed = options['seed'];
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let i = 0;
        let hasValue = false;
        let acc = this._seed;
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            if (hasValue || (hasValue = this._hasSeed)) {
                acc = await this._fn(acc, item, i++, signal);
                yield acc;
            }
            else {
                acc = item;
                hasValue = true;
                i++;
            }
        }
        if (i === 1 && !this._hasSeed) {
            yield acc;
        }
    }
}
exports.ScanAsyncIterable = ScanAsyncIterable;
/**
 * Applies an accumulator function over an async-iterable sequence and returns each intermediate result.
 * The specified seed value, if given, is used as the initial accumulator value.
 *
 * @template T The type of the elements in the source sequence.
 * @template R The type of the result of the aggregation.
 * @param {ScanOptions<T, R>} options The options including the accumulator function and seed.
 * @returns {OperatorAsyncFunction<T, R>} An async-enumerable sequence containing the accumulated values.
 */
function scan(options) {
    return function scanOperatorFunction(source) {
        return new ScanAsyncIterable(source, options);
    };
}
exports.scan = scan;

//# sourceMappingURL=scan.js.map
