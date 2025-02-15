"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRightProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const reduceright_1 = require("../../asynciterable/reduceright");
/**
 * @ignore
 */
async function reduceRightProto(options) {
    return (0, reduceright_1.reduceRight)(this, options);
}
exports.reduceRightProto = reduceRightProto;
asynciterablex_1.AsyncIterableX.prototype.reduceRight = reduceRightProto;

//# sourceMappingURL=reduceright.js.map
