"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const map_1 = require("../../iterable/operators/map");
/**
 * @ignore
 */
function mapProto(fn, thisArg) {
    return (0, map_1.map)(fn, thisArg)(this);
}
exports.mapProto = mapProto;
iterablex_1.IterableX.prototype.map = mapProto;

//# sourceMappingURL=map.js.map
