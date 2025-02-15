"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const isempty_1 = require("../../iterable/isempty");
/**
 * @ignore
 */
function isEmptyProto() {
    return (0, isempty_1.isEmpty)(this);
}
exports.isEmptyProto = isEmptyProto;
iterablex_1.IterableX.prototype.isEmpty = isEmptyProto;

//# sourceMappingURL=isempty.js.map
