"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.as = void 0;
const asynciterablex_1 = require("./asynciterablex");
const isiterable_1 = require("../util/isiterable");
const identity_1 = require("../util/identity");
const from_1 = require("./from");
/**
 * Converts the input into an async-iterable sequence.
 *
 * @param {*} source The source to convert to an async-iterable sequence.
 * @returns {AsyncIterableX<*>} An async-iterable containing the input.
 */
/** @nocollapse */
function as(source) {
    if (source instanceof asynciterablex_1.AsyncIterableX) {
        return source;
    }
    if (typeof source === 'string') {
        return new from_1.FromArrayIterable([source], identity_1.identityAsync);
    }
    if ((0, isiterable_1.isIterable)(source) || (0, isiterable_1.isAsyncIterable)(source)) {
        return new from_1.FromAsyncIterable(source, identity_1.identityAsync);
    }
    if ((0, isiterable_1.isPromise)(source)) {
        return new from_1.FromPromiseIterable(source, identity_1.identityAsync);
    }
    if ((0, isiterable_1.isObservable)(source)) {
        return new from_1.FromObservableAsyncIterable(source, identity_1.identityAsync);
    }
    if ((0, isiterable_1.isArrayLike)(source)) {
        return new from_1.FromArrayIterable(source, identity_1.identityAsync);
    }
    return new from_1.FromArrayIterable([source], identity_1.identityAsync);
}
exports.as = as;

//# sourceMappingURL=as.js.map
