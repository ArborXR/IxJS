"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const single_1 = require("../../asynciterable/single");
/**
 * @ignore
 */
function singleProto(options) {
    return (0, single_1.single)(this, options);
}
exports.singleProto = singleProto;
asynciterablex_1.AsyncIterableX.prototype.single = singleProto;

//# sourceMappingURL=single.js.map
