"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.averageProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const average_1 = require("../../iterable/average");
function averageProto(options) {
    return (0, average_1.average)(this, options);
}
exports.averageProto = averageProto;
iterablex_1.IterableX.prototype.average = averageProto;

//# sourceMappingURL=average.js.map
