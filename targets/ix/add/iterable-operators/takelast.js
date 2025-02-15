"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeLastProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const takelast_1 = require("../../iterable/operators/takelast");
/**
 * @ignore
 */
function takeLastProto(count) {
    return (0, takelast_1.takeLast)(count)(this);
}
exports.takeLastProto = takeLastProto;
iterablex_1.IterableX.prototype.takeLast = takeLastProto;

//# sourceMappingURL=takelast.js.map
