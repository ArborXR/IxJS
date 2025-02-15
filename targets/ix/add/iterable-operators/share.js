"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const share_1 = require("../../iterable/operators/share");
/**
 * @ignore
 */
function shareProto(fn) {
    return (0, share_1.share)(fn)(this);
}
exports.shareProto = shareProto;
iterablex_1.IterableX.prototype.share = shareProto;

//# sourceMappingURL=share.js.map
