"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatMapProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const flatmap_1 = require("../../asynciterable/operators/flatmap");
/**
 * @ignore
 */
function flatMapProto(selector, thisArg) {
    return (0, flatmap_1.flatMap)(selector, thisArg)(this);
}
exports.flatMapProto = flatMapProto;
asynciterablex_1.AsyncIterableX.prototype.flatMap = flatMapProto;

//# sourceMappingURL=flatmap.js.map
