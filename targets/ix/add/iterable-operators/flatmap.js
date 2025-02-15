"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatMapProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const flatmap_1 = require("../../iterable/operators/flatmap");
/**
 * @ignore
 */
function flatMapProto(fn, thisArg) {
    return (0, flatmap_1.flatMap)(fn, thisArg)(this);
}
exports.flatMapProto = flatMapProto;
iterablex_1.IterableX.prototype.flatMap = flatMapProto;

//# sourceMappingURL=flatmap.js.map
