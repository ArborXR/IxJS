"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const find_1 = require("../../asynciterable/find");
/**
 * @ignore
 */
async function findProto(options) {
    return (0, find_1.find)(this, options);
}
exports.findProto = findProto;
asynciterablex_1.AsyncIterableX.prototype.find = findProto;

//# sourceMappingURL=find.js.map
