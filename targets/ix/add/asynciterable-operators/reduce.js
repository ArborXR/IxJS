"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const reduce_1 = require("../../asynciterable/reduce");
/**
 * @ignore
 */
async function reduceProto(options) {
    return (0, reduce_1.reduce)(this, options);
}
exports.reduceProto = reduceProto;
asynciterablex_1.AsyncIterableX.prototype.reduce = reduceProto;

//# sourceMappingURL=reduce.js.map
