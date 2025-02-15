"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMap = void 0;
const identity_1 = require("../util/identity");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
/**
 * Converts an async-iterable to a map with a key selector and options for an element selector and cancellation.
 *
 * @template TSource The type of elements in the source collection.
 * @template TKey The type of key used for the map.
 * @template TElement The type of element to use for the map.
 * @param {AsyncIterable<TSource>} source The source collection to turn into a map.
 * @param {ToMapOptions<TSource, TElement>} [options]
 * @returns {(Promise<Map<TKey, TElement | TSource>>)}
 */
async function toMap(source, options) {
    const { ['signal']: signal, ['elementSelector']: elementSelector = identity_1.identityAsync, ['keySelector']: keySelector = identity_1.identityAsync, } = options || {};
    (0, aborterror_1.throwIfAborted)(signal);
    const map = new Map();
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        const value = await elementSelector(item, signal);
        const key = await keySelector(item, signal);
        map.set(key, value);
    }
    return map;
}
exports.toMap = toMap;

//# sourceMappingURL=tomap.js.map
