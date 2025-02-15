"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withLatestFrom = exports.WithLatestFromAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
const identity_1 = require("../../util/identity");
const safeRace_1 = require("../../util/safeRace");
// eslint-disable-next-line @typescript-eslint/no-empty-function
const NEVER_PROMISE = new Promise(() => { });
function wrapPromiseWithIndex(promise, index) {
    return promise.then((value) => ({ value, index }));
}
class WithLatestFromAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    _others;
    constructor(source, others) {
        super();
        this._source = source;
        this._others = others;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const length = this._others.length;
        const newLength = length + 1;
        const iterators = new Array(newLength);
        const nexts = new Array(newLength);
        let hasValueAll = false;
        const hasValue = new Array(length);
        const values = new Array(length);
        hasValue.fill(false);
        for (let i = 0; i < length; i++) {
            const iterator = (0, withabort_1.wrapWithAbort)(this._others[i], signal)[Symbol.asyncIterator]();
            iterators[i] = iterator;
            nexts[i] = wrapPromiseWithIndex(iterator.next(), i);
        }
        const it = (0, withabort_1.wrapWithAbort)(this._source, signal)[Symbol.asyncIterator]();
        iterators[length] = it;
        nexts[length] = wrapPromiseWithIndex(it.next(), length);
        for (;;) {
            const next = (0, safeRace_1.safeRace)(nexts);
            const { value: { value: value$, done: done$ }, index, } = await next;
            if (index === length) {
                if (done$) {
                    break;
                }
                const iterator$ = iterators[index];
                nexts[index] = wrapPromiseWithIndex(iterator$.next(), index);
                if (hasValueAll) {
                    yield [value$, ...values];
                }
            }
            else if (done$) {
                nexts[index] = NEVER_PROMISE;
            }
            else {
                values[index] = value$;
                hasValue[index] = true;
                hasValueAll = hasValue.every(identity_1.identity);
                const iterator$ = iterators[index];
                nexts[index] = wrapPromiseWithIndex(iterator$.next(), index);
            }
        }
    }
}
exports.WithLatestFromAsyncIterable = WithLatestFromAsyncIterable;
function withLatestFrom(...sources) {
    return function withLatestFromOperatorFunction(source) {
        return new WithLatestFromAsyncIterable(source, sources);
    };
}
exports.withLatestFrom = withLatestFrom;

//# sourceMappingURL=withlatestfrom.js.map
