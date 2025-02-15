"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishProto = void 0;
const iterablex_1 = require("../../iterable/iterablex");
const publish_1 = require("../../iterable/operators/publish");
/**
 * @ignore
 */
function publishProto(selector) {
    return (0, publish_1.publish)(selector)(this);
}
exports.publishProto = publishProto;
iterablex_1.IterableX.prototype.publish = publishProto;

//# sourceMappingURL=publish.js.map
