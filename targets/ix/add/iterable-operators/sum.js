"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const sum_1 = require("../../iterable/sum");
function sumProto(options) {
    return (0, sum_1.sum)(this, options);
}
exports.sumProto = sumProto;
iterablex_1.IterableX.prototype.sum = sumProto;

//# sourceMappingURL=sum.js.map
