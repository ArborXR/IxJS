"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const zip_1 = require("../../asynciterable/zip");
function zipProto(...args) {
    return (0, zip_1.zip)(...[this, ...args]);
}
exports.zipProto = zipProto;
asynciterablex_1.AsyncIterableX.prototype.zip = zipProto;

//# sourceMappingURL=zip.js.map
