"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const min_1 = require("../../iterable/min");
/**
 * @ignore
 */
function minProto(options) {
    return (0, min_1.min)(this, options);
}
exports.minProto = minProto;
iterablex_1.IterableX.prototype.min = minProto;

//# sourceMappingURL=min.js.map
