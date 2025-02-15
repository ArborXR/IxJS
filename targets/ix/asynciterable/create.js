"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const asynciterablex_1 = require("./asynciterablex");
const aborterror_1 = require("../aborterror");
class AnonymousAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _fn;
    constructor(fn) {
        super();
        this._fn = fn;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const it = await this._fn(signal);
        let next;
        while (!(next = await it.next()).done) {
            yield next.value;
        }
    }
}
/**
 * Creates a new iterable using the specified function implementing the members of AsyncIterable
 *
 * @template T The type of the elements returned by the enumerable sequence.
 * @param {((signal?: AbortSignal) => AsyncIterator<T> | Promise<AsyncIterator<T>>)} fn The function that creates the [Symbol.asyncIterator]() method
 * @returns {AsyncIterableX<T>} A new async-iterable instance.
 */
function create(fn) {
    return new AnonymousAsyncIterable(fn);
}
exports.create = create;

//# sourceMappingURL=create.js.map
