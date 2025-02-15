"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const retry_1 = require("../../asynciterable/operators/retry");
/**
 * @ignore
 */
function retryProto(count = -1) {
    return (0, retry_1.retry)(count)(this);
}
exports.retryProto = retryProto;
asynciterablex_1.AsyncIterableX.prototype.retry = retryProto;

//# sourceMappingURL=retry.js.map
