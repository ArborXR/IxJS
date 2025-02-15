"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequenceEqualProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const sequenceequal_1 = require("../../asynciterable/sequenceequal");
/**
 * @ignore
 */
async function sequenceEqualProto(other, options) {
    return (0, sequenceequal_1.sequenceEqual)(this, other, options);
}
exports.sequenceEqualProto = sequenceEqualProto;
asynciterablex_1.AsyncIterableX.prototype.sequenceEqual = sequenceEqualProto;

//# sourceMappingURL=sequenceequal.js.map
