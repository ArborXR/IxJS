"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const zip_1 = require("../../iterable/zip");
function zipProto(...args) {
    return (0, zip_1.zip)([this, ...args]);
}
exports.zipProto = zipProto;
iterablex_1.IterableX.prototype.zip = zipProto;

//# sourceMappingURL=zip.js.map
