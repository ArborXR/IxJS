"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
const iterablex_1 = require("./iterablex");
const from_1 = require("./from");
function pipe(source, ...operations) {
    if (operations.length === 0) {
        return source instanceof iterablex_1.IterableX ? source : (0, from_1.from)(source);
    }
    const piped = (input) => {
        return operations.reduce((prev, fn) => fn(prev), input);
    };
    return piped(source);
}
exports.pipe = pipe;

//# sourceMappingURL=pipe.js.map
