"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const skip_1 = require("../../iterable/operators/skip");
/**
 * @ignore
 */
function skipProto(count) {
    return (0, skip_1.skip)(count)(this);
}
exports.skipProto = skipProto;
iterablex_1.IterableX.prototype.skip = skipProto;

//# sourceMappingURL=skip.js.map
