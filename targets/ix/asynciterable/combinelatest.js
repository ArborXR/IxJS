"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineLatest = exports.CombineLatestAsyncIterable = void 0;
const asynciterablex_1 = require("./asynciterablex");
const identity_1 = require("../util/identity");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
const safeRace_1 = require("../util/safeRace");
// eslint-disable-next-line @typescript-eslint/no-empty-function
const NEVER_PROMISE = new Promise(() => { });
function wrapPromiseWithIndex(promise, index) {
    return promise.then((value) => ({ value, index }));
}
class CombineLatestAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _sources;
    constructor(sources) {
        super();
        this._sources = sources;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const length = this._sources.length;
        const iterators = new Array(length);
        const nexts = new Array(length);
        let hasValueAll = false;
        const values = new Array(length);
        const hasValues = new Array(length);
        let active = length;
        hasValues.fill(false);
        for (let i = 0; i < length; i++) {
            const iterator = (0, withabort_1.wrapWithAbort)(this._sources[i], signal)[Symbol.asyncIterator]();
            iterators[i] = iterator;
            nexts[i] = wrapPromiseWithIndex(iterator.next(), i);
        }
        while (active > 0) {
            const next = (0, safeRace_1.safeRace)(nexts);
            const { value: { value: value$, done: done$ }, index, } = await next;
            if (done$) {
                nexts[index] = NEVER_PROMISE;
                active--;
            }
            else {
                values[index] = value$;
                hasValues[index] = true;
                const iterator$ = iterators[index];
                nexts[index] = wrapPromiseWithIndex(iterator$.next(), index);
                if (hasValueAll || (hasValueAll = hasValues.every(identity_1.identity))) {
                    yield values;
                }
            }
        }
    }
}
exports.CombineLatestAsyncIterable = CombineLatestAsyncIterable;
function combineLatest(...sources) {
    return new CombineLatestAsyncIterable(sources);
}
exports.combineLatest = combineLatest;

//# sourceMappingURL=combinelatest.js.map
