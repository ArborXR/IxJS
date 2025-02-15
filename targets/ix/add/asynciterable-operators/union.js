"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unionProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const union_1 = require("../../asynciterable/operators/union");
/**
 * @ignore
 */
function unionProto(right, comparer) {
    return (0, union_1.union)(right, comparer)(this);
}
exports.unionProto = unionProto;
asynciterablex_1.AsyncIterableX.prototype.union = unionProto;

//# sourceMappingURL=union.js.map
