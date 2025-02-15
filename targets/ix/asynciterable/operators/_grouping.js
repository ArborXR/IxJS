"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGrouping = void 0;
const withabort_1 = require("./withabort");
/**
 * @ignore
 */
async function createGrouping(source, keySelector, elementSelector, signal) {
    const map = new Map();
    for await (const item of (0, withabort_1.wrapWithAbort)(source, signal)) {
        const key = await keySelector(item, signal);
        let grouping = map.get(key);
        if (!map.has(key)) {
            grouping = [];
            map.set(key, grouping);
        }
        const element = await elementSelector(item, signal);
        grouping.push(element);
    }
    return map;
}
exports.createGrouping = createGrouping;

//# sourceMappingURL=_grouping.js.map
