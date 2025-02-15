"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwError = void 0;
const asynciterablex_1 = require("./asynciterablex");
const aborterror_1 = require("../aborterror");
class ThrowAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _error;
    constructor(error) {
        super();
        this._error = error;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        throw this._error;
    }
}
/**
 * Creates an async-iterable that throws the specified error upon iterating.
 *
 * @param {*} error The error to throw upon iterating the async-iterable.
 * @returns {AsyncIterableX<never>} An async-iterable that throws when iterated.
 */
function throwError(error) {
    return new ThrowAsyncIterable(error);
}
exports.throwError = throwError;

//# sourceMappingURL=throwerrror.js.map
