"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const groupby_1 = require("../../iterable/operators/groupby");
const identity_1 = require("../../util/identity");
function groupByProto(keySelector, elementSelector = identity_1.identity) {
    return (0, groupby_1.groupBy)(keySelector, elementSelector)(this);
}
exports.groupByProto = groupByProto;
iterablex_1.IterableX.prototype.groupBy = groupByProto;

//# sourceMappingURL=groupby.js.map
