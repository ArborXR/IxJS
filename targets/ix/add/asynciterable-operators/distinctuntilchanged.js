"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinctUntilChangedProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const distinctuntilchanged_1 = require("../../asynciterable/operators/distinctuntilchanged");
/**
 * @ignore
 */
function distinctUntilChangedProto(options) {
    return (0, distinctuntilchanged_1.distinctUntilChanged)(options)(this);
}
exports.distinctUntilChangedProto = distinctUntilChangedProto;
asynciterablex_1.AsyncIterableX.prototype.distinctUntilChanged = distinctUntilChangedProto;

//# sourceMappingURL=distinctuntilchanged.js.map
