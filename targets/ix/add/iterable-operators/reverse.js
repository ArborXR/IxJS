"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const reverse_1 = require("../../iterable/operators/reverse");
/**
 * @ignore
 */
function reverseProto() {
    return (0, reverse_1.reverse)()(this);
}
exports.reverseProto = reverseProto;
iterablex_1.IterableX.prototype.reverse = reverseProto;

//# sourceMappingURL=reverse.js.map
