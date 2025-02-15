"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const find_1 = require("../../iterable/find");
/**
 * @ignore
 */
function findProto(options) {
    return (0, find_1.find)(this, options);
}
exports.findProto = findProto;
iterablex_1.IterableX.prototype.find = findProto;

//# sourceMappingURL=find.js.map
