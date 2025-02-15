"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.as = void 0;
const iterablex_1 = require("./iterablex");
const from_1 = require("./from");
const isiterable_1 = require("../util/isiterable");
const identity_1 = require("../util/identity");
/** @nocollapse */
function as(source) {
    if (source instanceof iterablex_1.IterableX) {
        return source;
    }
    if (typeof source === 'string') {
        return new from_1.FromIterable([source], identity_1.identity);
    }
    if ((0, isiterable_1.isIterable)(source)) {
        return new from_1.FromIterable(source, identity_1.identity);
    }
    if ((0, isiterable_1.isArrayLike)(source)) {
        return new from_1.FromIterable(source, identity_1.identity);
    }
    return new from_1.FromIterable([source], identity_1.identity);
}
exports.as = as;

//# sourceMappingURL=as.js.map
