"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.never = exports.NeverAsyncIterable = void 0;
const asynciterablex_1 = require("./asynciterablex");
const aborterror_1 = require("../aborterror");
class NeverAsyncIterable extends asynciterablex_1.AsyncIterableX {
    constructor() {
        super();
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        await new Promise((_, reject) => {
            if (signal) {
                signal.addEventListener('abort', () => reject(new aborterror_1.AbortError()), { once: true });
            }
        });
    }
}
exports.NeverAsyncIterable = NeverAsyncIterable;
/**
 * An async-iterable sequence that never returns a value.
 *
 * @returns {AsyncIterableX<never>} An async-iterable sequence that never returns a value.
 */
function never() {
    return new NeverAsyncIterable();
}
exports.never = never;

//# sourceMappingURL=never.js.map
