"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinctProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const distinct_1 = require("../../asynciterable/operators/distinct");
/**
 * @ignore
 */
function distinctProto(options) {
    return (0, distinct_1.distinct)(options)(this);
}
exports.distinctProto = distinctProto;
asynciterablex_1.AsyncIterableX.prototype.distinct = distinctProto;

//# sourceMappingURL=distinct.js.map
