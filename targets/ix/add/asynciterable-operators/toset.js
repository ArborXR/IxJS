"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSetProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const toset_1 = require("../../asynciterable/toset");
/**
 * @ignore
 */
function toSetProto() {
    return (0, toset_1.toSet)(this);
}
exports.toSetProto = toSetProto;
asynciterablex_1.AsyncIterableX.prototype.toSet = toSetProto;

//# sourceMappingURL=toset.js.map
