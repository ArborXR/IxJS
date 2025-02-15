"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeatProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const repeat_1 = require("../../iterable/operators/repeat");
/**
 * @ignore
 */
function repeatProto(count = -1) {
    return (0, repeat_1.repeat)(count)(this);
}
exports.repeatProto = repeatProto;
iterablex_1.IterableX.prototype.repeat = repeatProto;

//# sourceMappingURL=repeat.js.map
