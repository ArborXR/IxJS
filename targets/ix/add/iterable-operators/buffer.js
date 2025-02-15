"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const buffer_1 = require("../../iterable/operators/buffer");
/**
 * @ignore
 */
function bufferProto(count, skip) {
    return (0, buffer_1.buffer)(count, skip)(this);
}
exports.bufferProto = bufferProto;
iterablex_1.IterableX.prototype.buffer = bufferProto;

//# sourceMappingURL=buffer.js.map
