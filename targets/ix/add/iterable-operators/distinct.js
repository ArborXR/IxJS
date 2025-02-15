"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinctProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const distinct_1 = require("../../iterable/operators/distinct");
/**
 * @ignore
 */
function distinctProto(options) {
    return (0, distinct_1.distinct)(options)(this);
}
exports.distinctProto = distinctProto;
iterablex_1.IterableX.prototype.distinct = distinctProto;

//# sourceMappingURL=distinct.js.map
