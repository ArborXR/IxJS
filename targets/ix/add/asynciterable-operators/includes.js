"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includesProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const includes_1 = require("../../asynciterable/includes");
/**
 * @ignore
 */
function includesProto(searchElement, fromIndex) {
    return (0, includes_1.includes)(this, searchElement, fromIndex);
}
exports.includesProto = includesProto;
asynciterablex_1.AsyncIterableX.prototype.includes = includesProto;

//# sourceMappingURL=includes.js.map
