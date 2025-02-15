"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minByProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const minby_1 = require("../../asynciterable/minby");
/**
 * @ignore
 */
function minByProto(options) {
    return (0, minby_1.minBy)(this, options);
}
exports.minByProto = minByProto;
asynciterablex_1.AsyncIterableX.prototype.minBy = minByProto;

//# sourceMappingURL=minby.js.map
