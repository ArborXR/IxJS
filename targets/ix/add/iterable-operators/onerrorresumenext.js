"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onErrorResumeNextProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const onerrorresumenext_1 = require("../../iterable/onerrorresumenext");
/**
 * @ignore
 */
function onErrorResumeNextProto(...args) {
    return (0, onerrorresumenext_1.onErrorResumeNext)(this, ...args);
}
exports.onErrorResumeNextProto = onErrorResumeNextProto;
iterablex_1.IterableX.prototype.onErrorResumeNext = onErrorResumeNextProto;

//# sourceMappingURL=onerrorresumenext.js.map
