"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const sum_1 = require("../../asynciterable/sum");
function sumProto(options) {
    return (0, sum_1.sum)(this, options);
}
exports.sumProto = sumProto;
asynciterablex_1.AsyncIterableX.prototype.sum = sumProto;

//# sourceMappingURL=sum.js.map
