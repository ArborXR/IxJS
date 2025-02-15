"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const count_1 = require("../../iterable/count");
/**
 * @ignore
 */
function countProto(options) {
    return (0, count_1.count)(this, options);
}
exports.countProto = countProto;
iterablex_1.IterableX.prototype.count = countProto;

//# sourceMappingURL=count.js.map
