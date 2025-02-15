"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const min_1 = require("../../asynciterable/min");
function minProto(options) {
    return (0, min_1.min)(this, options);
}
exports.minProto = minProto;
asynciterablex_1.AsyncIterableX.prototype.min = minProto;

//# sourceMappingURL=min.js.map
