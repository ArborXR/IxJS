"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const except_1 = require("../../iterable/operators/except");
/**
 * @ignore
 */
function exceptProto(second, comparer) {
    return (0, except_1.except)(second, comparer)(this);
}
exports.exceptProto = exceptProto;
iterablex_1.IterableX.prototype.except = exceptProto;

//# sourceMappingURL=except.js.map
