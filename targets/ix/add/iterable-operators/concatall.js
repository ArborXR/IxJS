"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatAllProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const concatall_1 = require("../../iterable/operators/concatall");
/**
 * @ignore
 */
function concatAllProto() {
    return (0, concatall_1.concatAll)()(this);
}
exports.concatAllProto = concatAllProto;
iterablex_1.IterableX.prototype.concatAll = concatAllProto;

//# sourceMappingURL=concatall.js.map
