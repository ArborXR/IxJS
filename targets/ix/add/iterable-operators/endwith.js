"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endWithProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const endwith_1 = require("../../iterable/operators/endwith");
/**
 * @ignore
 */
function endWithProto(...args) {
    return (0, endwith_1.endWith)(...args)(this);
}
exports.endWithProto = endWithProto;
iterablex_1.IterableX.prototype.endWith = endWithProto;

//# sourceMappingURL=endwith.js.map
