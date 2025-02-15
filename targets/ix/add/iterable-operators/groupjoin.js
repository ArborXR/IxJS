"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupJoinProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const groupjoin_1 = require("../../iterable/operators/groupjoin");
/**
 * @ignore
 */
function groupJoinProto(inner, outerSelector, innerSelector, resultSelector) {
    return (0, groupjoin_1.groupJoin)(inner, outerSelector, innerSelector, resultSelector)(this);
}
exports.groupJoinProto = groupJoinProto;
iterablex_1.IterableX.prototype.groupJoin = groupJoinProto;

//# sourceMappingURL=groupjoin.js.map
