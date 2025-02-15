"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArrayProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const toarray_1 = require("../../asynciterable/toarray");
/**
 * @ignore
 */
function toArrayProto() {
    return (0, toarray_1.toArray)(this);
}
exports.toArrayProto = toArrayProto;
asynciterablex_1.AsyncIterableX.prototype.toArray = toArrayProto;

//# sourceMappingURL=toarray.js.map
