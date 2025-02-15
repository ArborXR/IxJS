"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const catcherror_1 = require("../../asynciterable/operators/catcherror");
/**
 * @ignore
 */
function catchProto(handler) {
    return (0, catcherror_1.catchError)(handler)(this);
}
exports.catchProto = catchProto;
asynciterablex_1.AsyncIterableX.prototype.catchError = catchProto;

//# sourceMappingURL=catcherror.js.map
