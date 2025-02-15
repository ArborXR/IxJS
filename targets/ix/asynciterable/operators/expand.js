"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expand = exports.ExpandAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class ExpandAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _selector;
    constructor(source, selector) {
        super();
        this._source = source;
        this._selector = selector;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const q = [this._source];
        while (q.length > 0) {
            const src = q.shift();
            for await (const item of (0, withabort_1.wrapWithAbort)(src, signal)) {
                const items = await this._selector(item, signal);
                q.push(items);
                yield item;
            }
        }
    }
}
exports.ExpandAsyncIterable = ExpandAsyncIterable;
/**
 * Expands (breadth first) the async-iterable sequence by recursively applying a selector function to generate more sequences at each recursion level.
 *
 * @template TSource Source sequence element type.
 * @param {((
 *     value: TSource,
 *     signal?: AbortSignal
 *   ) => AsyncIterable<TSource> | Promise<AsyncIterable<TSource>>)} selector Selector function to retrieve the next sequence to expand.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator which returns a sequence with results
 * from the recursive expansion of the source sequence.
 */
function expand(selector) {
    return function expandOperatorFunction(source) {
        return new ExpandAsyncIterable(source, selector);
    };
}
exports.expand = expand;

//# sourceMappingURL=expand.js.map
