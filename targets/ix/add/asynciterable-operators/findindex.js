"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIndexProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const findindex_1 = require("../../asynciterable/findindex");
/**
 * @ignore
 */
function findIndexProto(options) {
    return (0, findindex_1.findIndex)(this, options);
}
exports.findIndexProto = findIndexProto;
asynciterablex_1.AsyncIterableX.prototype.findIndex = findIndexProto;

//# sourceMappingURL=findindex.js.map
