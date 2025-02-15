"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAllProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const mergeall_1 = require("../../asynciterable/operators/mergeall");
/**
 * @ignore
 */
function mergeAllProto() {
    return (0, mergeall_1.mergeAll)()(this);
}
exports.mergeAllProto = mergeAllProto;
asynciterablex_1.AsyncIterableX.prototype.mergeAll = mergeAllProto;

//# sourceMappingURL=mergeall.js.map
