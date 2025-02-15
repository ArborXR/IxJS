"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMapProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const tomap_1 = require("../../asynciterable/tomap");
async function toMapProto(options) {
    return (0, tomap_1.toMap)(this, options);
}
exports.toMapProto = toMapProto;
asynciterablex_1.AsyncIterableX.prototype.toMap = toMapProto;

//# sourceMappingURL=tomap.js.map
