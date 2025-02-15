"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const share_1 = require("../../asynciterable/operators/share");
/**
 * @ignore
 */
function shareProto(selector) {
    return (0, share_1.share)(selector)(this);
}
exports.shareProto = shareProto;
asynciterablex_1.AsyncIterableX.prototype.share = shareProto;

//# sourceMappingURL=share.js.map
