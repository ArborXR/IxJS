"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipWhileProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const skipwhile_1 = require("../../iterable/operators/skipwhile");
function skipWhileProto(predicate) {
    return (0, skipwhile_1.skipWhile)(predicate)(this);
}
exports.skipWhileProto = skipWhileProto;
iterablex_1.IterableX.prototype.skipWhile = skipWhileProto;

//# sourceMappingURL=skipwhile.js.map
