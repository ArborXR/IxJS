"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultIfEmptyProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const defaultifempty_1 = require("../../asynciterable/operators/defaultifempty");
/**
 * @ignore
 */
function defaultIfEmptyProto(defaultValue) {
    return (0, defaultifempty_1.defaultIfEmpty)(defaultValue)(this);
}
exports.defaultIfEmptyProto = defaultIfEmptyProto;
asynciterablex_1.AsyncIterableX.prototype.defaultIfEmpty = defaultIfEmptyProto;

//# sourceMappingURL=defaultifempty.js.map
