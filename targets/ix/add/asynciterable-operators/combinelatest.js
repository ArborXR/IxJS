"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineLatestProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const combinelatest_1 = require("../../asynciterable/combinelatest");
function combineLatestProto(...sources) {
    return (0, combinelatest_1.combineLatest)(...[this, ...sources]);
}
exports.combineLatestProto = combineLatestProto;
asynciterablex_1.AsyncIterableX.prototype.combineLatest = combineLatestProto;

//# sourceMappingURL=combinelatest.js.map
