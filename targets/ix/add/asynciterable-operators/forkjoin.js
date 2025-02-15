"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forkJoinProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const forkjoin_1 = require("../../asynciterable/forkjoin");
function forkJoinProto(...args) {
    return (0, forkjoin_1.forkJoin)(...[this, ...args]);
}
exports.forkJoinProto = forkJoinProto;
asynciterablex_1.AsyncIterableX.prototype.forkJoin = forkJoinProto;

//# sourceMappingURL=forkjoin.js.map
