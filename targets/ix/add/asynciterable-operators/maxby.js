"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxByProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const maxby_1 = require("../../asynciterable/maxby");
/**
 * @ignore
 */
function maxByProto(options) {
    return (0, maxby_1.maxBy)(this, options);
}
exports.maxByProto = maxByProto;
asynciterablex_1.AsyncIterableX.prototype.maxBy = maxByProto;

//# sourceMappingURL=maxby.js.map
