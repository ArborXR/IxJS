"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whileDo = void 0;
const asynciterablex_1 = require("./asynciterablex");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
class WhileAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _condition;
    _source;
    constructor(condition, source) {
        super();
        this._condition = condition;
        this._source = source;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        while (await this._condition(signal)) {
            for await (const item of (0, withabort_1.wrapWithAbort)(this._source, signal)) {
                yield item;
            }
        }
    }
}
/**
 * Repeats the given source as long as the specified conditions holds, where
 * the condition is evaluated before each repeated source is iterated.
 *
 * @template TSource
 * @param {AsyncIterable<TSource>} source Source to repeat as long as the condition function evaluates to true.
 * @param {((signal?: AbortSignal) => boolean | Promise<boolean>)} condition Condition that will be evaluated before the source sequence is iterated.
 * @returns {AsyncIterableX<TSource>} An async-iterable which is repeated while the condition returns true.
 */
function whileDo(source, condition) {
    return new WhileAsyncIterable(condition, source);
}
exports.whileDo = whileDo;

//# sourceMappingURL=whiledo.js.map
