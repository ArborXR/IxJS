"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounceProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const debounce_1 = require("../../asynciterable/operators/debounce");
/**
 * @ignore
 */
function debounceProto(time) {
    return (0, debounce_1.debounce)(time)(this);
}
exports.debounceProto = debounceProto;
asynciterablex_1.AsyncIterableX.prototype.debounce = debounceProto;

//# sourceMappingURL=debounce.js.map
