"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchErrorProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const catcherror_1 = require("../../iterable/operators/catcherror");
/**
 * @ignore
 */
function catchErrorProto(fn) {
    return (0, catcherror_1.catchError)(fn)(this);
}
exports.catchErrorProto = catchErrorProto;
iterablex_1.IterableX.prototype.catchError = catchErrorProto;

//# sourceMappingURL=catcherror.js.map
