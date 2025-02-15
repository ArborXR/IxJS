"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const reduce_1 = require("../../iterable/reduce");
function reduceProto(optionsOrAccumulator, seed) {
    return (0, reduce_1.reduce)(this, 
    // eslint-disable-next-line no-nested-ternary
    typeof optionsOrAccumulator === 'function'
        ? arguments.length > 1
            ? // prettier-ignore
                { 'callback': optionsOrAccumulator, 'seed': seed }
            : // prettier-ignore
                { 'callback': optionsOrAccumulator }
        : optionsOrAccumulator);
}
exports.reduceProto = reduceProto;
iterablex_1.IterableX.prototype.reduce = reduceProto;

//# sourceMappingURL=reduce.js.map
