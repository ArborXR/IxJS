"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const merge_1 = require("../../asynciterable/merge");
/**
 * @ignore
 */
function mergeProto(...args) {
    return (0, merge_1.merge)(this, ...args);
}
exports.mergeProto = mergeProto;
asynciterablex_1.AsyncIterableX.prototype.merge = mergeProto;

//# sourceMappingURL=merge.js.map
