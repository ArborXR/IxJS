"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const max_1 = require("../../iterable/max");
function maxProto(options) {
    return (0, max_1.max)(this, options);
}
exports.maxProto = maxProto;
iterablex_1.IterableX.prototype.max = maxProto;

//# sourceMappingURL=max.js.map
