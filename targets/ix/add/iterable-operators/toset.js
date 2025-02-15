"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSetProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const toset_1 = require("../../iterable/toset");
/**
 * @ignore
 */
function toSetProto() {
    return (0, toset_1.toSet)(this);
}
exports.toSetProto = toSetProto;
iterablex_1.IterableX.prototype.toSet = toSetProto;

//# sourceMappingURL=toset.js.map
