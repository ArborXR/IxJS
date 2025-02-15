"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IterableX = void 0;
const as_1 = require("./as");
const from_1 = require("./from");
const bindcallback_1 = require("../util/bindcallback");
const isiterable_1 = require("../util/isiterable");
/**
 * This class serves as the base for all operations which support [Symbol.iterator].
 */
class IterableX {
    forEach(projection, thisArg) {
        const fn = (0, bindcallback_1.bindCallback)(projection, thisArg, 2);
        let i = 0;
        for (const item of this) {
            fn(item, i++);
        }
    }
    pipe(...args) {
        let i = -1;
        const n = args.length;
        let acc = this;
        while (++i < n) {
            acc = args[i]((0, as_1.as)(acc));
        }
        return acc;
    }
}
exports.IterableX = IterableX;
IterableX.prototype[Symbol.toStringTag] = 'IterableX';
Object.defineProperty(IterableX, Symbol.hasInstance, {
    writable: true,
    configurable: true,
    value(inst) {
        return !!(inst && inst[Symbol.toStringTag] === 'IterableX');
    },
});
(0, from_1._initialize)(IterableX);
try {
    ((isBrowser) => {
        if (isBrowser) {
            return;
        }
        IterableX.prototype['pipe'] = nodePipe;
        const readableOpts = (x, opts = x._writableState || { objectMode: true }) => opts;
        function nodePipe(...args) {
            let i = -1;
            let end;
            const n = args.length;
            let prev = this;
            let next;
            while (++i < n) {
                next = args[i];
                if (typeof next === 'function') {
                    prev = next((0, as_1.as)(prev));
                }
                else if ((0, isiterable_1.isWritableNodeStream)(next)) {
                    ({ end = true } = args[i + 1] || {});
                    // prettier-ignore
                    return (0, isiterable_1.isReadableNodeStream)(prev) ? prev.pipe(next, { end }) :
                        (0, as_1.as)(prev).toNodeStream(readableOpts(next)).pipe(next, { end });
                }
            }
            return prev;
        }
    })(typeof window === 'object' && typeof document === 'object' && document.nodeType === 9);
}
catch (e) {
    /* */
}

//# sourceMappingURL=iterablex.js.map
