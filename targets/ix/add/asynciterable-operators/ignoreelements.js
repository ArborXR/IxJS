"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ignoreElementsProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const ignoreelements_1 = require("../../asynciterable/operators/ignoreelements");
/**
 * @ignore
 */
function ignoreElementsProto() {
    return (0, ignoreelements_1.ignoreElements)()(this);
}
exports.ignoreElementsProto = ignoreElementsProto;
asynciterablex_1.AsyncIterableX.prototype.ignoreElements = ignoreElementsProto;

//# sourceMappingURL=ignoreelements.js.map
