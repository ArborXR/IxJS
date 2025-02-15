"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extremaBy = void 0;
const aborterror_1 = require("../aborterror");
const withabort_1 = require("./operators/withabort");
async function extremaBy(source, selector, comparer, signal) {
    (0, aborterror_1.throwIfAborted)(signal);
    let result = [];
    const it = (0, withabort_1.wrapWithAbort)(source, signal)[Symbol.asyncIterator]();
    const { value, done } = await it.next();
    if (done) {
        throw new Error('Sequence contains no elements');
    }
    let resKey = await selector(value, signal);
    result.push(value);
    let next;
    while (!(next = await it.next()).done) {
        const current = next.value;
        const key = await selector(current, signal);
        const cmp = await comparer(key, resKey, signal);
        if (cmp === 0) {
            result.push(current);
        }
        else if (cmp > 0) {
            result = [current];
            resKey = key;
        }
    }
    return result;
}
exports.extremaBy = extremaBy;

//# sourceMappingURL=_extremaby.js.map
