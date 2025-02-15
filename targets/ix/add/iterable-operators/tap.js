"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tapProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const tap_1 = require("../../iterable/operators/tap");
function tapProto(observerOrNext, error, complete) {
    return (0, tap_1.tap)(observerOrNext, error, complete)(this);
}
exports.tapProto = tapProto;
iterablex_1.IterableX.prototype.tap = tapProto;

//# sourceMappingURL=tap.js.map
