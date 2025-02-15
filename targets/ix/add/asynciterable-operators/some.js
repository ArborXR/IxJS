"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const some_1 = require("../../asynciterable/some");
/**
 * @ignore
 */
function someProto(options) {
    return (0, some_1.some)(this, options);
}
exports.someProto = someProto;
asynciterablex_1.AsyncIterableX.prototype.some = someProto;

//# sourceMappingURL=some.js.map
