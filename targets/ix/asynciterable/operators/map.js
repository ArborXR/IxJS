"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.MapAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class MapAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _selector;
    _thisArg;
    constructor(source, selector, thisArg) {
        super();
        this._source = source;
        this._selector = selector;
        this._thisArg = thisArg;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let i = 0;
        for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
            const result = await this._selector.call(this._thisArg, item, i++, signal);
            yield result;
        }
    }
}
exports.MapAsyncIterable = MapAsyncIterable;
/**
 * Projects each element of an async-enumerable sequence into a new form.
 *
 * @template TSource The type of the elements in the source sequence.
 * @template TResult The type of the elements in the result sequence, obtained by running the selector
 * function for each element in the source sequence.
 * @param {((value: TSource, index: number, signal?: AbortSignal) => Promise<TResult> | TResult)} selector A transform function
 * to apply to each source element.
 * @param {*} [thisArg] Optional this for binding to the selector.
 * @returns {OperatorAsyncFunction<TSource, TResult>} An async-iterable sequence whose elements are the result of invoking the transform
 * function on each element of source.
 */
function map(selector, thisArg) {
    return function mapOperatorFunction(source) {
        return new MapAsyncIterable(source, selector, thisArg);
    };
}
exports.map = map;

//# sourceMappingURL=map.js.map
