"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersectProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const intersect_1 = require("../../asynciterable/operators/intersect");
/**
 * @ignore
 */
function intersectProto(second, comparer) {
    return (0, intersect_1.intersect)(second, comparer)(this);
}
exports.intersectProto = intersectProto;
asynciterablex_1.AsyncIterableX.prototype.intersect = intersectProto;

//# sourceMappingURL=intersect.js.map
