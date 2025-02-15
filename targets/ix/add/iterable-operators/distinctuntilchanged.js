"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinctUntilChangedProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const distinctuntilchanged_1 = require("../../iterable/operators/distinctuntilchanged");
/**
 * @ignore
 */
function distinctUntilChangedProto(options) {
    return (0, distinctuntilchanged_1.distinctUntilChanged)(options)(this);
}
exports.distinctUntilChangedProto = distinctUntilChangedProto;
iterablex_1.IterableX.prototype.distinctUntilChanged = distinctUntilChangedProto;

//# sourceMappingURL=distinctuntilchanged.js.map
