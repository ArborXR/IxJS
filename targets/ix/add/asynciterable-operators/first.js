"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const first_1 = require("../../asynciterable/first");
/**
 * @ignore
 */
async function firstProto(options) {
    return (0, first_1.first)(this, options);
}
exports.firstProto = firstProto;
asynciterablex_1.AsyncIterableX.prototype.first = firstProto;

//# sourceMappingURL=first.js.map
