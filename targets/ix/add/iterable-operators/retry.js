"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const retry_1 = require("../../iterable/operators/retry");
/**
 * @ignore
 */
function retryProto(count = -1) {
    return (0, retry_1.retry)(count)(this);
}
exports.retryProto = retryProto;
iterablex_1.IterableX.prototype.retry = retryProto;

//# sourceMappingURL=retry.js.map
