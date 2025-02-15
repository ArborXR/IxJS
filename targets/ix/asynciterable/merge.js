"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = exports.MergeAsyncIterable = void 0;
const asynciterablex_1 = require("./asynciterablex");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
const safeRace_1 = require("../util/safeRace");
// eslint-disable-next-line @typescript-eslint/no-empty-function
const NEVER_PROMISE = new Promise(() => { });
function wrapPromiseWithIndex(promise, index) {
    return promise.then((value) => ({ value, index }));
}
class MergeAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const length = this._source.length;
        const iterators = new Array(length);
        const nexts = new Array(length);
        let active = length;
        for (let i = 0; i < length; i++) {
            const iterator = (0, withabort_1.wrapWithAbort)(this._source[i], signal)[Symbol.asyncIterator]();
            iterators[i] = iterator;
            nexts[i] = wrapPromiseWithIndex(iterator.next(), i);
        }
        while (active > 0) {
            const next = (0, safeRace_1.safeRace)(nexts);
            const { value: { done: done$, value: value$ }, index, } = await next;
            if (done$) {
                nexts[index] = NEVER_PROMISE;
                active--;
            }
            else {
                const iterator$ = iterators[index];
                nexts[index] = wrapPromiseWithIndex(iterator$.next(), index);
                yield value$;
            }
        }
    }
}
exports.MergeAsyncIterable = MergeAsyncIterable;
function merge(source, ...args) {
    return new MergeAsyncIterable([source, ...args]);
}
exports.merge = merge;

//# sourceMappingURL=merge.js.map
