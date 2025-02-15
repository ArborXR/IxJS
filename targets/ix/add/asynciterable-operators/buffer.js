"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const buffer_1 = require("../../asynciterable/operators/buffer");
/**
 * @ignore
 */
function bufferProto(count, skip) {
    return (0, buffer_1.buffer)(count, skip)(this);
}
exports.bufferProto = bufferProto;
asynciterablex_1.AsyncIterableX.prototype.buffer = bufferProto;

//# sourceMappingURL=buffer.js.map
