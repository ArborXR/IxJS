"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeWhileProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const takewhile_1 = require("../../asynciterable/operators/takewhile");
function takeWhileProto(predicate) {
    return (0, takewhile_1.takeWhile)(predicate)(this);
}
exports.takeWhileProto = takeWhileProto;
asynciterablex_1.AsyncIterableX.prototype.takeWhile = takeWhileProto;

//# sourceMappingURL=takewhile.js.map
