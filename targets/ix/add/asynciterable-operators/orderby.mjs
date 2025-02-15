import { AsyncIterableX } from '../../asynciterable/asynciterablex';
import { orderBy, orderByDescending, } from '../../asynciterable/operators/orderby';
/**
 * @ignore
 */
export function orderByProto(keySelector, comparer) {
    return orderBy(keySelector, comparer)(this);
}
/**
 * @ignore
 */
export function orderByDescendingProto(keySelector, comparer) {
    return orderByDescending(keySelector, comparer)(this);
}
AsyncIterableX.prototype.orderBy = orderByProto;
AsyncIterableX.prototype.orderByDescending = orderByDescendingProto;

//# sourceMappingURL=orderby.mjs.map
