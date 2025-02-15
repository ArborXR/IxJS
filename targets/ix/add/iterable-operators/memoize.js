"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoizeProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const memoize_1 = require("../../iterable/operators/memoize");
/**
 * @ignore
 */
function memoizeProto(readerCount = -1, selector) {
    return (0, memoize_1.memoize)(readerCount, selector)(this);
}
exports.memoizeProto = memoizeProto;
iterablex_1.IterableX.prototype.memoize = memoizeProto;

//# sourceMappingURL=memoize.js.map
