"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersectProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const intersect_1 = require("../../iterable/operators/intersect");
/**
 * @ignore
 */
function intersectProto(second, comparer) {
    return (0, intersect_1.intersect)(second, comparer)(this);
}
exports.intersectProto = intersectProto;
iterablex_1.IterableX.prototype.intersect = intersectProto;

//# sourceMappingURL=intersect.js.map
