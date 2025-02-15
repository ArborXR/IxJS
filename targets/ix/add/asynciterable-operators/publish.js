"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishProto = void 0;
const asynciterablex_1 = require("../../asynciterable/asynciterablex");
const publish_1 = require("../../asynciterable/operators/publish");
/**
 * @ignore
 */
function publishProto(selector) {
    return (0, publish_1.publish)(selector)(this);
}
exports.publishProto = publishProto;
asynciterablex_1.AsyncIterableX.prototype.publish = publishProto;

//# sourceMappingURL=publish.js.map
