"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doWhileProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const dowhile_1 = require("../../asynciterable/operators/dowhile");
/**
 * @ignore
 */
function doWhileProto(condition) {
    return (0, dowhile_1.doWhile)(condition)(this);
}
exports.doWhileProto = doWhileProto;
asynciterablex_1.AsyncIterableX.prototype.doWhile = doWhileProto;

//# sourceMappingURL=dowhile.js.map
