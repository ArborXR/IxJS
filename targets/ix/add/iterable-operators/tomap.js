"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMapProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const tomap_1 = require("../../iterable/tomap");
function toMapProto(options) {
    return (0, tomap_1.toMap)(this, options);
}
exports.toMapProto = toMapProto;
iterablex_1.IterableX.prototype.toMap = toMapProto;

//# sourceMappingURL=tomap.js.map
