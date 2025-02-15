"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startWithProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const startwith_1 = require("../../iterable/operators/startwith");
/**
 * @ignore
 */
function startWithProto(...args) {
    return (0, startwith_1.startWith)(...args)(this);
}
exports.startWithProto = startWithProto;
iterablex_1.IterableX.prototype.startWith = startWithProto;

//# sourceMappingURL=startwith.js.map
