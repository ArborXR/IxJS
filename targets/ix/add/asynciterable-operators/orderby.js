"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderByDescendingProto = exports.orderByProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const orderby_1 = require("../../asynciterable/operators/orderby");
/**
 * @ignore
 */
function orderByProto(keySelector, comparer) {
    return (0, orderby_1.orderBy)(keySelector, comparer)(this);
}
exports.orderByProto = orderByProto;
/**
 * @ignore
 */
function orderByDescendingProto(keySelector, comparer) {
    return (0, orderby_1.orderByDescending)(keySelector, comparer)(this);
}
exports.orderByDescendingProto = orderByDescendingProto;
asynciterablex_1.AsyncIterableX.prototype.orderBy = orderByProto;
asynciterablex_1.AsyncIterableX.prototype.orderByDescending = orderByDescendingProto;

//# sourceMappingURL=orderby.js.map
