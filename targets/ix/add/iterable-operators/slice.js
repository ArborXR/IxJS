"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sliceProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const slice_1 = require("../../iterable/operators/slice");
/**
 * @ignore
 */
function sliceProto(begin, end) {
    return (0, slice_1.slice)(begin, end)(this);
}
exports.sliceProto = sliceProto;
iterablex_1.IterableX.prototype.slice = sliceProto;

//# sourceMappingURL=slice.js.map
