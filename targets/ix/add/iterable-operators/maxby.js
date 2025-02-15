"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxByProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const maxby_1 = require("../../iterable/maxby");
/**
 * @ignore
 */
function maxByProto(options) {
    return (0, maxby_1.maxBy)(this, options);
}
exports.maxByProto = maxByProto;
iterablex_1.IterableX.prototype.maxBy = maxByProto;

//# sourceMappingURL=maxby.js.map
