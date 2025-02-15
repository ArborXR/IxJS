"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const count_1 = require("../../asynciterable/count");
/**
 * @ignore
 */
function countProto(options) {
    return (0, count_1.count)(this, options);
}
exports.countProto = countProto;
asynciterablex_1.AsyncIterableX.prototype.count = countProto;

//# sourceMappingURL=count.js.map
