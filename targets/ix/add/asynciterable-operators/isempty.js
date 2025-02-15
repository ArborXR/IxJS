"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const isempty_1 = require("../../asynciterable/isempty");
/**
 * @ignore
 */
function isEmptyProto() {
    return (0, isempty_1.isEmpty)(this);
}
exports.isEmptyProto = isEmptyProto;
asynciterablex_1.AsyncIterableX.prototype.isEmpty = isEmptyProto;

//# sourceMappingURL=isempty.js.map
