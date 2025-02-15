"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toObservableProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const toobservable_1 = require("../../asynciterable/toobservable");
/**
 * @ignore
 */
function toObservableProto() {
    return (0, toobservable_1.toObservable)(this);
}
exports.toObservableProto = toObservableProto;
asynciterablex_1.AsyncIterableX.prototype.toObservable = toObservableProto;

//# sourceMappingURL=toobservable.js.map
