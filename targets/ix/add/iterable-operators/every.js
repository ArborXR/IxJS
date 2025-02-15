"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.everyProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const every_1 = require("../../iterable/every");
/**
 * @ignore
 */
function everyProto(options) {
    return (0, every_1.every)(this, options);
}
exports.everyProto = everyProto;
iterablex_1.IterableX.prototype.every = everyProto;

//# sourceMappingURL=every.js.map
