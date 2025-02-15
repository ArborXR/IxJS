"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRightProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const reduceright_1 = require("../../iterable/reduceright");
function reduceRightProto(optionsOrAccumulator, seed) {
    return (0, reduceright_1.reduceRight)(this, 
    // eslint-disable-next-line no-nested-ternary
    typeof optionsOrAccumulator === 'function'
        ? arguments.length > 1
            ? // prettier-ignore
                { 'callback': optionsOrAccumulator, 'seed': seed }
            : // prettier-ignore
                { 'callback': optionsOrAccumulator }
        : optionsOrAccumulator);
}
exports.reduceRightProto = reduceRightProto;
iterablex_1.IterableX.prototype.reduceRight = reduceRightProto;

//# sourceMappingURL=reduceright.js.map
