"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluckProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const pluck_1 = require("../../asynciterable/operators/pluck");
/**
 * @ignore
 */
function pluckProto(...args) {
    return (0, pluck_1.pluck)(...args)(this);
}
exports.pluckProto = pluckProto;
asynciterablex_1.AsyncIterableX.prototype.pluck = pluckProto;

//# sourceMappingURL=pluck.js.map
