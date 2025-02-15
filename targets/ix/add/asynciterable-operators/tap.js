"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tapProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const tap_1 = require("../../asynciterable/operators/tap");
/** @ignore */
function tapProto(observerOrNext, error, complete) {
    return (0, tap_1.tap)(observerOrNext, error, complete)(this);
}
exports.tapProto = tapProto;
asynciterablex_1.AsyncIterableX.prototype.tap = tapProto;

//# sourceMappingURL=tap.js.map
