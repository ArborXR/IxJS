"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequenceEqualProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const sequenceequal_1 = require("../../iterable/sequenceequal");
/**
 * @ignore
 */
function sequenceEqualProto(other, options) {
    return (0, sequenceequal_1.sequenceEqual)(this, other, options);
}
exports.sequenceEqualProto = sequenceEqualProto;
iterablex_1.IterableX.prototype.sequenceEqual = sequenceEqualProto;

//# sourceMappingURL=sequenceequal.js.map
