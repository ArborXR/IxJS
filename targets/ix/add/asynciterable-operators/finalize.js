"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalizeProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const finalize_1 = require("../../asynciterable/operators/finalize");
/**
 * @ignore
 */
function finalizeProto(action) {
    return (0, finalize_1.finalize)(action)(this);
}
exports.finalizeProto = finalizeProto;
asynciterablex_1.AsyncIterableX.prototype.finalize = finalizeProto;

//# sourceMappingURL=finalize.js.map
