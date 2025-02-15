"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const last_1 = require("../../iterable/last");
/**
 * @ignore
 */
function lastProto(options) {
    return (0, last_1.last)(this, options);
}
exports.lastProto = lastProto;
iterablex_1.IterableX.prototype.last = lastProto;

//# sourceMappingURL=last.js.map
