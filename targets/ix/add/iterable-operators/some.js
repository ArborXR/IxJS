"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const some_1 = require("../../iterable/some");
/**
 * @ignore
 */
function someProto(options) {
    return (0, some_1.some)(this, options);
}
exports.someProto = someProto;
iterablex_1.IterableX.prototype.some = someProto;

//# sourceMappingURL=some.js.map
