"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doWhileProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const dowhile_1 = require("../../iterable/operators/dowhile");
/**
 * @ignore
 */
function doWhileProto(condition) {
    return (0, dowhile_1.doWhile)(condition)(this);
}
exports.doWhileProto = doWhileProto;
iterablex_1.IterableX.prototype.doWhile = doWhileProto;

//# sourceMappingURL=dowhile.js.map
