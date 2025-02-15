"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLength = void 0;
const tointeger_1 = require("./tointeger");
const maxSafeInteger = Math.pow(2, 53) - 1;
/**
 * @ignore
 */
function toLength(value) {
    const len = (0, tointeger_1.toInteger)(value);
    return Math.min(Math.max(len, 0), maxSafeInteger);
}
exports.toLength = toLength;

//# sourceMappingURL=tolength.js.map
