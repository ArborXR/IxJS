"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = exports.TapIterable = void 0;
const iterablex_1 = require("../iterablex");
const toobserver_1 = require("../../util/toobserver");
class TapIterable extends iterablex_1.IterableX {
    _source;
    _observer;
    constructor(source, observer) {
        super();
        this._source = source;
        this._observer = observer;
    }
    *[Symbol.iterator]() {
        const it = this._source[Symbol.iterator]();
        while (1) {
            let next;
            try {
                next = it.next();
                if (next.done) {
                    break;
                }
            }
            catch (e) {
                if (this._observer.error) {
                    this._observer.error(e);
                }
                throw e;
            }
            if (this._observer.next) {
                this._observer.next(next.value);
            }
            yield next.value;
        }
        if (this._observer.complete) {
            this._observer.complete();
        }
    }
}
exports.TapIterable = TapIterable;
/**
 * Invokes an action for each element in the iterable sequence, and propagates all observer
 * messages through the result sequence. This method can be used for debugging, logging, etc. by
 * intercepting the message stream to run arbitrary actions for messages on the pipeline.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {(PartialObserver<TSource> | ((value: TSource) => any) | null)} [observerOrNext] Observer whose methods to invoke as
 * part of the source sequence's observation or a function to invoke for each element in the iterable sequence.
 * @param {(((err: any) => any) | null)} [error] Function to invoke upon exceptional termination of the iterable sequence.
 * @param {((() => any) | null)} [complete] Function to invoke upon graceful termination of the iterable sequence.
 * @returns {MonoTypeOperatorFunction<TSource>} The source sequence with the side-effecting behavior applied.
 */
function tap(observerOrNext, error, complete) {
    return function tapOperatorFunction(source) {
        return new TapIterable(source, (0, toobserver_1.toObserver)(observerOrNext, error, complete));
    };
}
exports.tap = tap;

//# sourceMappingURL=tap.js.map
