"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.everyProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const every_1 = require("../../asynciterable/every");
/**
 * @ignore
 */
function everyProto(options) {
    return (0, every_1.every)(this, options);
}
exports.everyProto = everyProto;
asynciterablex_1.AsyncIterableX.prototype.every = everyProto;

//# sourceMappingURL=every.js.map
