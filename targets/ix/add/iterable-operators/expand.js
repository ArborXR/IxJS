"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const expand_1 = require("../../iterable/operators/expand");
/**
 * @ignore
 */
function expandProto(fn) {
    return (0, expand_1.expand)(fn)(this);
}
exports.expandProto = expandProto;
iterablex_1.IterableX.prototype.expand = expandProto;

//# sourceMappingURL=expand.js.map
