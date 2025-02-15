"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const first_1 = require("../../iterable/first");
/**
 * @ignore
 */
function firstProto(options) {
    return (0, first_1.first)(this, options);
}
exports.firstProto = firstProto;
iterablex_1.IterableX.prototype.first = firstProto;

//# sourceMappingURL=first.js.map
