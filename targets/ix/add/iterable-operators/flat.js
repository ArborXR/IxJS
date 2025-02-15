"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const flat_1 = require("../../iterable/operators/flat");
/**
 * @ignore
 */
function flatProto(depth) {
    return (0, flat_1.flat)(depth)(this);
}
exports.flatProto = flatProto;
iterablex_1.IterableX.prototype.flat = flatProto;

//# sourceMappingURL=flat.js.map
