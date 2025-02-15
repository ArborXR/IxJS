"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderByDescendingProto = exports.orderByProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const orderby_1 = require("../../iterable/operators/orderby");
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
iterablex_1.IterableX.prototype.orderBy = orderByProto;
iterablex_1.IterableX.prototype.orderByDescending = orderByDescendingProto;

//# sourceMappingURL=orderby.js.map
