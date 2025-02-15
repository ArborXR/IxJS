"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unionProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const union_1 = require("../../iterable/operators/union");
/**
 * @ignore
 */
function unionProto(right, comparer) {
    return (0, union_1.union)(right, comparer)(this);
}
exports.unionProto = unionProto;
iterablex_1.IterableX.prototype.union = unionProto;

//# sourceMappingURL=union.js.map
