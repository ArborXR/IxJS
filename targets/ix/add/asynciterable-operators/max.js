"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const max_1 = require("../../asynciterable/max");
async function maxProto(options) {
    return (0, max_1.max)(this, options);
}
exports.maxProto = maxProto;
asynciterablex_1.AsyncIterableX.prototype.max = maxProto;

//# sourceMappingURL=max.js.map
