"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipLastProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const skiplast_1 = require("../../iterable/operators/skiplast");
/**
 * @ignore
 */
function skipLastProto(count) {
    return (0, skiplast_1.skipLast)(count)(this);
}
exports.skipLastProto = skipLastProto;
iterablex_1.IterableX.prototype.skipLast = skipLastProto;

//# sourceMappingURL=skiplast.js.map
