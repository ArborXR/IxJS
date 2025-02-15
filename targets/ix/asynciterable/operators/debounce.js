"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = exports.DebounceAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const aborterror_1 = require("../../aborterror");
class DebounceAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _time;
    constructor(source, time) {
        super();
        this._source = source;
        this._time = time;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        let done = false;
        let reject = () => {
            /**/
        };
        let resolve = () => {
            /**/
        };
        let promise = new Promise((r1, r2) => {
            resolve = r1;
            reject = r2;
        });
        (async () => {
            let id = null;
            const emitValue = (value) => {
                id = null;
                resolve(value);
                promise = new Promise((r1, r2) => {
                    resolve = r1;
                    reject = r2;
                });
            };
            if (signal) {
                signal.addEventListener('abort', () => {
                    done = true;
                    if (id) {
                        clearTimeout(id);
                    }
                    id = null;
                    reject(new aborterror_1.AbortError());
                }, { once: true });
            }
            try {
                let result;
                // @ts-ignore
                const it = this._source[Symbol.asyncIterator](signal);
                // 1. check `!done`
                // 2. await next value
                // 3. check `!done` again, in case the signal aborted while the promise was pending
                while (!done && !(result = await it.next()).done && !done) {
                    if (id) {
                        clearTimeout(id);
                    }
                    id = setTimeout(emitValue, this._time, result.value);
                }
            }
            catch (e) {
                reject(e);
            }
            done = true;
        })();
        while (!done) {
            yield await promise;
        }
    }
}
exports.DebounceAsyncIterable = DebounceAsyncIterable;
/**
 * Emits a notification from the source async-iterable only after a particular time span
 * has passed without another source emission.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {number} time The timeout duration in milliseconds
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An operator function which debounces by the given timeout.
 */
function debounce(time) {
    return function debounceOperatorFunction(source) {
        return new DebounceAsyncIterable(source, time);
    };
}
exports.debounce = debounce;

//# sourceMappingURL=debounce.js.map
