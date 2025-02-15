"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const single_1 = require("../../iterable/single");
/**
 * @ignore
 */
function singleProto(options) {
    return (0, single_1.single)(this, options);
}
exports.singleProto = singleProto;
iterablex_1.IterableX.prototype.single = singleProto;

//# sourceMappingURL=single.js.map
