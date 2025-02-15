"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoizeProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const memoize_1 = require("../../asynciterable/operators/memoize");
/**
 * @ignore
 */
function memoizeProto(readerCount = -1, selector) {
    return (0, memoize_1.memoize)(readerCount, selector)(this);
}
exports.memoizeProto = memoizeProto;
asynciterablex_1.AsyncIterableX.prototype.memoize = memoizeProto;

//# sourceMappingURL=memoize.js.map
