"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAll = void 0;
const as_1 = require("../as");
const flatmap_1 = require("./flatmap");
/**
 * Merges elements from all inner async-iterable sequences into a single async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequences.
 * @returns {OperatorAsyncFunction<AsyncIterable<TSource>, TSource>} The async-iterable sequence that merges the elements of the inner sequences.
 */
function mergeAll(concurrent = Infinity) {
    return function mergeAllOperatorFunction(source) {
        return (0, as_1.as)(source)['pipe']((0, flatmap_1.flatMap)((s) => s, concurrent));
    };
}
exports.mergeAll = mergeAll;

//# sourceMappingURL=mergeall.js.map
