"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
const asynciterablex_1 = require("./asynciterablex");
const from_1 = require("./from");
function pipe(source, ...operations) {
    if (operations.length === 0) {
        return source instanceof asynciterablex_1.AsyncIterableX ? source : (0, from_1.from)(source);
    }
    const piped = (input) => {
        return operations.reduce((prev, fn) => fn(prev), input);
    };
    return piped(source);
}
exports.pipe = pipe;

//# sourceMappingURL=pipe.js.map
