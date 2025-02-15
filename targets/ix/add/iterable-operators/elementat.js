"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementAtProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const elementat_1 = require("../../iterable/elementat");
/**
 * @ignore
 */
function elementAtProto(index) {
    return (0, elementat_1.elementAt)(this, index);
}
exports.elementAtProto = elementAtProto;
iterablex_1.IterableX.prototype.elementAt = elementAtProto;

//# sourceMappingURL=elementat.js.map
