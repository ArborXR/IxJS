"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flat = void 0;
const flatmap_1 = require("./flatmap");
const isiterable_1 = require("../../util/isiterable");
/**
 * Flattens the nested async-iterable by the given depth.
 *
 * @template T The type of elements in the source sequence.
 * @param {number} [depth=Infinity] The depth to flatten the async-iterable sequence if specified, otherwise infinite.
 * @returns {MonoTypeOperatorAsyncFunction<T>} An operator that flattens the async-iterable sequence.
 */
function flat(depth = -1, concurrent = Infinity) {
    depth = (depth < 0 ? Infinity : depth);
    return function flattenOperatorFunction(source) {
        return (0, flatmap_1.flatMap)((item) => {
            if ((0, isiterable_1.isAsyncIterable)(item)) {
                return depth > 0 ? flat(depth - 1)(item) : item;
            }
            return [item];
        }, concurrent)(source);
    };
}
exports.flat = flat;

//# sourceMappingURL=flat.js.map
