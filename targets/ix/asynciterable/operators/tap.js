"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = exports.TapAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const toobserver_1 = require("../../util/toobserver");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
class TapAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _observer;
    constructor(source, observer) {
        super();
        this._source = source;
        this._observer = observer;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const source = (0, withabort_1.wrapWithAbort)(this._source, signal);
        const it = source[Symbol.asyncIterator]();
        while (1) {
            let next;
            try {
                next = await it.next();
            }
            catch (e) {
                if (e instanceof aborterror_1.AbortError) {
                    throw e;
                }
                if (this._observer.error) {
                    await this._observer.error(e);
                }
                throw e;
            }
            if (next.done) {
                if (this._observer.complete) {
                    await this._observer.complete();
                }
                break;
            }
            if (this._observer.next) {
                await this._observer.next(next.value);
            }
            yield next.value;
        }
    }
}
exports.TapAsyncIterable = TapAsyncIterable;
/**
 * Invokes an action for each element in the async-iterable sequence, and propagates all observer
 * messages through the result sequence. This method can be used for debugging, logging, etc. by
 * intercepting the message stream to run arbitrary actions for messages on the pipeline.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {(PartialAsyncObserver<TSource> | ((value: TSource) => any) | null)} [observerOrNext] Observer whose methods to invoke as
 * part of the source sequence's observation or a function to invoke for each element in the async-iterable sequence.
 * @param {(((err: any) => any) | null)} [error] Function to invoke upon exceptional termination of the async-iterable sequence.
 * @param {((() => any) | null)} [complete] Function to invoke upon graceful termination of the async-iterable sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The source sequence with the side-effecting behavior applied.
 */
function tap(observerOrNext, error, complete) {
    return function tapOperatorFunction(source) {
        return new TapAsyncIterable(source, (0, toobserver_1.toObserver)(observerOrNext, error, complete));
    };
}
exports.tap = tap;

//# sourceMappingURL=tap.js.map
