"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwIfAborted = exports.AbortError = void 0;
const isiterable_1 = require("./util/isiterable");
class AbortError extends Error {
    constructor(message = 'The operation has been aborted') {
        super(message);
        Object.setPrototypeOf(this, AbortError.prototype);
        Error.captureStackTrace(this, this.constructor);
        this.name = 'AbortError';
    }
    get [Symbol.toStringTag]() {
        return 'AbortError';
    }
}
exports.AbortError = AbortError;
function throwIfAborted(signal) {
    if (signal && signal.aborted) {
        throw new AbortError();
    }
}
exports.throwIfAborted = throwIfAborted;
Object.defineProperty(AbortError, Symbol.hasInstance, {
    writable: true,
    configurable: true,
    value(x) {
        return ((0, isiterable_1.isObject)(x) && (x.constructor.name === 'AbortError' || x[Symbol.toStringTag] === 'AbortError'));
    },
});

//# sourceMappingURL=aborterror.js.map
