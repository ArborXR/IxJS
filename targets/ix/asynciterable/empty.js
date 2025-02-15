"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empty = void 0;
const asynciterablex_1 = require("./asynciterablex");
const aborterror_1 = require("../aborterror");
class EmptyAsyncIterable extends asynciterablex_1.AsyncIterableX {
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
    }
}
/**
 * Returns an empty async-iterable sequence.
 *
 * @template TSource The type used for the async-iterable type parameter of the resulting sequence.
 * @returns {AsyncIterableX<never>} An async-iterable sequence with no elements.
 */
function empty() {
    return new EmptyAsyncIterable();
}
exports.empty = empty;

//# sourceMappingURL=empty.js.map
