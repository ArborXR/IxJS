"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncifyErrback = void 0;
const asyncsink_1 = require("./asyncsink");
const memoize_1 = require("./operators/memoize");
/**
 * Converts a Node.js style error first callback to an async-iterable sequence.
 *
 * @template TSource The type of the returned value from the callback.
 * @param {Function} func The Node.js error first callback to convert to an async-iterable.
 * @returns {(...args: any[]) => AsyncIterableX<TSource>} A function, when invoked, contains the result of the callback as an async-iterable.
 */
function asyncifyErrback(func) {
    return function (...args) {
        const sink = new asyncsink_1.AsyncSink();
        const handler = function (err, ...innerArgs) {
            if (err) {
                sink.error(err);
                sink.end();
            }
            else {
                sink.write(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
                sink.end();
            }
        };
        try {
            func(...args.concat(handler));
        }
        catch (e) {
            sink.error(e);
            sink.end();
        }
        const yielder = async function* () {
            for (let next; !(next = await sink.next()).done;) {
                yield next.value;
            }
        };
        return (0, memoize_1.memoize)()(yielder());
    };
}
exports.asyncifyErrback = asyncifyErrback;

//# sourceMappingURL=asyncifyerrback.js.map
