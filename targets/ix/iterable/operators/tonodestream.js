"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNodeStream = void 0;
const tonodestream_1 = require("../../iterable/tonodestream");
function toNodeStream(options) {
    return function toNodeStreamOperatorFunction(source) {
        return !options || options.objectMode === true
            ? new tonodestream_1.IterableReadable(source, options)
            : new tonodestream_1.IterableReadable(source, options);
    };
}
exports.toNodeStream = toNodeStream;

//# sourceMappingURL=tonodestream.js.map
