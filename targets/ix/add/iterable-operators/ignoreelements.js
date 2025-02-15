"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ignoreElementsProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const ignoreelements_1 = require("../../iterable/operators/ignoreelements");
/**
 * @ignore
 */
function ignoreElementsProto() {
    return (0, ignoreelements_1.ignoreElements)()(this);
}
exports.ignoreElementsProto = ignoreElementsProto;
iterablex_1.IterableX.prototype.ignoreElements = ignoreElementsProto;

//# sourceMappingURL=ignoreelements.js.map
