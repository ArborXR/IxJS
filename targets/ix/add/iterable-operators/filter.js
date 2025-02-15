"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const filter_1 = require("../../iterable/operators/filter");
function filterProto(predicate, thisArg) {
    return (0, filter_1.filter)(predicate, thisArg)(this);
}
exports.filterProto = filterProto;
iterablex_1.IterableX.prototype.filter = filterProto;

//# sourceMappingURL=filter.js.map
