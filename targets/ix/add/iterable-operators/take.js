"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const take_1 = require("../../iterable/operators/take");
/**
 * @ignore
 */
function takeProto(count) {
    return (0, take_1.take)(count)(this);
}
exports.takeProto = takeProto;
iterablex_1.IterableX.prototype.take = takeProto;

//# sourceMappingURL=take.js.map
