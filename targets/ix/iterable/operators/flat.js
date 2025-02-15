"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flat = exports.FlattenIterable = void 0;
const iterablex_1 = require("../iterablex");
const isiterable_1 = require("../../util/isiterable");
class FlattenIterable extends iterablex_1.IterableX {
    _source;
    _depth;
    constructor(source, depth) {
        super();
        this._source = source;
        this._depth = depth;
    }
    // eslint-disable-next-line consistent-return
    *_flatten(source, depth) {
        if (depth === 0) {
            for (const item of source) {
                yield item;
            }
            return undefined;
        }
        for (const item of source) {
            if ((0, isiterable_1.isIterable)(item)) {
                for (const innerItem of this._flatten(item, depth - 1)) {
                    yield innerItem;
                }
            }
            else {
                yield item;
            }
        }
    }
    [Symbol.iterator]() {
        return this._flatten(this._source, this._depth)[Symbol.iterator]();
    }
}
exports.FlattenIterable = FlattenIterable;
/**
 * Flattens the nested iterable by the given depth.
 *
 * @template T The type of elements in the source sequence.
 * @param {number} [depth=Infinity] The depth to flatten the iterable sequence if specified, otherwise infinite.
 * @returns {MonoTypeOperatorFunction<T>} An operator that flattens the iterable sequence.
 */
function flat(depth = Infinity) {
    return function flattenOperatorFunction(source) {
        return new FlattenIterable(source, depth);
    };
}
exports.flat = flat;

//# sourceMappingURL=flat.js.map
