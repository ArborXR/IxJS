"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.of = exports.OfAsyncIterable = void 0;
const asynciterablex_1 = require("./asynciterablex");
const aborterror_1 = require("../aborterror");
class OfAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _args;
    constructor(args) {
        super();
        this._args = args;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        for (const item of this._args) {
            yield item;
        }
    }
}
exports.OfAsyncIterable = OfAsyncIterable;
/**
 * Creates an async-iterable from the specified elements.
 *
 * @template TSource The type of the elements to create an async-iterable sequence.
 * @param {...TSource[]} args The elements to turn into an async-iterable sequence.
 * @returns {AsyncIterableX<TSource>} The async-iterable sequence created from the elements.
 */
function of(...args) {
    return new OfAsyncIterable(args);
}
exports.of = of;

//# sourceMappingURL=of.js.map
