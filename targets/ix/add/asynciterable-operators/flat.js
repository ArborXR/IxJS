"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const flat_1 = require("../../asynciterable/operators/flat");
/**
 * @ignore
 */
function flatProto(depth = -1) {
    return (0, flat_1.flat)(depth)(this);
}
exports.flatProto = flatProto;
asynciterablex_1.AsyncIterableX.prototype.flat = flatProto;

//# sourceMappingURL=flat.js.map
