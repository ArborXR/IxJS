"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.averageProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const average_1 = require("../../asynciterable/average");
function averageProto(options) {
    return (0, average_1.average)(this, options);
}
exports.averageProto = averageProto;
asynciterablex_1.AsyncIterableX.prototype.average = averageProto;

//# sourceMappingURL=average.js.map
