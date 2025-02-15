"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includes = void 0;
const comparer_1 = require("../util/comparer");
/**
 *  Determines whether an itreable includes a certain value among its entries, returning true or false as appropriate.
 *
 * @template T The type of elements in the source sequence.
 * @param {Iterable<T>} source The source sequence to search for the item.
 * @param {T} valueToFind The value to search for.
 * @param {number} [fromIndex=0] The position in this iterable at which to begin searching for valueToFind.
 * @returns {boolean} Returns true if the value valueToFind is found within the iterable.
 */
function includes(source, searchElement, fromIndex = 0) {
    let fromIdx = fromIndex;
    let i = 0;
    if (Math.abs(fromIdx)) {
        fromIdx = 0;
    }
    for (const item of source) {
        if (i++ > fromIdx && (0, comparer_1.comparer)(item, searchElement)) {
            return true;
        }
    }
    return false;
}
exports.includes = includes;

//# sourceMappingURL=includes.js.map
