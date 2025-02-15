"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doWhile = void 0;
const concat_1 = require("../concat");
const whiledo_1 = require("../whiledo");
/**
 * Generates an async-iterable sequence by repeating a source sequence as long as the given loop postcondition holds.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {(() => boolean)} condition Loop condition.
 * @returns {MonoTypeOperatorFunction<TSource>} An operator that generates an async-iterable by repeating a
 * source sequence while the postcondition holds.
 */
function doWhile(condition) {
    return function doWhileOperatorFunction(source) {
        return (0, concat_1.concat)(source, (0, whiledo_1.whileDo)(source, condition));
    };
}
exports.doWhile = doWhile;

//# sourceMappingURL=dowhile.js.map
