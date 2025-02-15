"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArrayProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const toarray_1 = require("../../iterable/toarray");
/**
 * @ignore
 */
function toArrayProto() {
    return (0, toarray_1.toArray)(this);
}
exports.toArrayProto = toArrayProto;
iterablex_1.IterableX.prototype.toArray = toArrayProto;

//# sourceMappingURL=toarray.js.map
