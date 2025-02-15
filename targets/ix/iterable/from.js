"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._initialize = exports.FromIterable = exports.from = void 0;
const identity_1 = require("../util/identity");
const bindcallback_1 = require("../util/bindcallback");
const isiterable_1 = require("../util/isiterable");
const tolength_1 = require("../util/tolength");
function _initialize(Ctor) {
    /** @nocollapse */
    exports.from = function (source, selector = identity_1.identity, thisArg) {
        const fn = (0, bindcallback_1.bindCallback)(selector, thisArg, 2);
        if ((0, isiterable_1.isIterable)(source)) {
            return new exports.FromIterable(source, fn);
        }
        if ((0, isiterable_1.isArrayLike)(source)) {
            return new exports.FromIterable(source, fn);
        }
        if ((0, isiterable_1.isIterator)(source)) {
            return new exports.FromIterable({ [Symbol.iterator]: () => source }, fn);
        }
        throw new TypeError('Input type not supported');
    };
    // eslint-disable-next-line no-shadow
    exports.FromIterable = class FromIterable extends Ctor {
        _source;
        _fn;
        constructor(source, fn) {
            super();
            this._source = source;
            this._fn = fn;
        }
        *[Symbol.iterator]() {
            const iterable = (0, isiterable_1.isIterable)(this._source);
            let i = 0;
            if (iterable) {
                for (const item of this._source) {
                    yield this._fn(item, i++);
                }
            }
            else {
                const length = (0, tolength_1.toLength)(this._source.length);
                while (i < length) {
                    const val = this._source[i];
                    yield this._fn(val, i++);
                }
            }
        }
    };
}
exports._initialize = _initialize;

//# sourceMappingURL=from.js.map
