"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalizeProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const finalize_1 = require("../../iterable/operators/finalize");
/**
 * @ignore
 */
function finalizeProto(action) {
    return (0, finalize_1.finalize)(action)(this);
}
exports.finalizeProto = finalizeProto;
iterablex_1.IterableX.prototype.finally = finalizeProto;

//# sourceMappingURL=finalize.js.map
