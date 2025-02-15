"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includesProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const includes_1 = require("../../iterable/includes");
/**
 * @ignore
 */
function includesProto(searchElement, fromIndex) {
    return (0, includes_1.includes)(this, searchElement, fromIndex);
}
exports.includesProto = includesProto;
iterablex_1.IterableX.prototype.includes = includesProto;

//# sourceMappingURL=includes.js.map
