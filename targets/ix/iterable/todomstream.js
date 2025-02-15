"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDOMStreamProto = exports.toDOMStream = void 0;
const from_1 = require("../asynciterable/from");
const publish_1 = require("./operators/publish");
const iterablex_1 = require("../iterable/iterablex");
const todomstream_1 = require("../asynciterable/todomstream");
function toDOMStream(source, options) {
    if (!options || !('type' in options) || options['type'] !== 'bytes') {
        return (0, todomstream_1.toDOMStream)((0, from_1.from)(source), options);
    }
    return (0, todomstream_1.toDOMStream)((0, from_1.from)(source), options);
}
exports.toDOMStream = toDOMStream;
iterablex_1.IterableX.prototype.tee = function () {
    return _getDOMStream(this).tee();
};
iterablex_1.IterableX.prototype.pipeTo = function (writable, options) {
    return _getDOMStream(this).pipeTo(writable, options);
};
iterablex_1.IterableX.prototype.pipeThrough = function (duplex, options) {
    return _getDOMStream(this).pipeThrough(duplex, options);
};
function _getDOMStream(self) {
    return self._DOMStream || (self._DOMStream = self.pipe((0, publish_1.publish)(), toDOMStream));
}
function toDOMStreamProto(options) {
    return !options ? toDOMStream(this) : toDOMStream(this, options);
}
exports.toDOMStreamProto = toDOMStreamProto;
iterablex_1.IterableX.prototype.toDOMStream = toDOMStreamProto;

//# sourceMappingURL=todomstream.js.map
