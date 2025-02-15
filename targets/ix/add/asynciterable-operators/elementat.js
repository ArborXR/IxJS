"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementAtProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const elementat_1 = require("../../asynciterable/elementat");
/**
 * @ignore
 */
function elementAtProto(index) {
    return (0, elementat_1.elementAt)(this, index);
}
exports.elementAtProto = elementAtProto;
asynciterablex_1.AsyncIterableX.prototype.elementAt = elementAtProto;

//# sourceMappingURL=elementat.js.map
