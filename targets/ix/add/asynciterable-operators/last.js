"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const last_1 = require("../../asynciterable/last");
/**
 * @ignore
 */
async function lastProto(options) {
    return (0, last_1.last)(this, options);
}
exports.lastProto = lastProto;
asynciterablex_1.AsyncIterableX.prototype.last = lastProto;

//# sourceMappingURL=last.js.map
