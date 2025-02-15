"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const except_1 = require("../../asynciterable/operators/except");
/**
 * @ignore
 */
function exceptProto(second, comparer) {
    return (0, except_1.except)(second, comparer)(this);
}
exports.exceptProto = exceptProto;
asynciterablex_1.AsyncIterableX.prototype.except = exceptProto;

//# sourceMappingURL=except.js.map
