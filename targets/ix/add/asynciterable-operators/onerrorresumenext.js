"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onErrorResumeNextProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const onerrorresumenext_1 = require("../../asynciterable/onerrorresumenext");
/**
 * @ignore
 */
function onErrorResumeNextProto(...args) {
    return (0, onerrorresumenext_1.onErrorResumeNext)(this, ...args);
}
exports.onErrorResumeNextProto = onErrorResumeNextProto;
asynciterablex_1.AsyncIterableX.prototype.onErrorResumeNext = onErrorResumeNextProto;

//# sourceMappingURL=onerrorresumenext.js.map
