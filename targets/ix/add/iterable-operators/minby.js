"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minByProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const minby_1 = require("../../iterable/minby");
/**
 * @ignore
 */
function minByProto(options) {
    return (0, minby_1.minBy)(this, options);
}
exports.minByProto = minByProto;
iterablex_1.IterableX.prototype.minBy = minByProto;

//# sourceMappingURL=minby.js.map
