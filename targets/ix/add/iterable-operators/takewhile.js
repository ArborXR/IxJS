"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeWhileProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const takewhile_1 = require("../../iterable/operators/takewhile");
function takeWhileProto(predicate) {
    return (0, takewhile_1.takeWhile)(predicate)(this);
}
exports.takeWhileProto = takeWhileProto;
iterablex_1.IterableX.prototype.takeWhile = takeWhileProto;

//# sourceMappingURL=takewhile.js.map
