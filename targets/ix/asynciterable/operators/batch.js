"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batch = exports.BatchAsyncIterable = void 0;
const asynciterablex_1 = require("../asynciterablex");
const withabort_1 = require("./withabort");
const aborterror_1 = require("../../aborterror");
const WAITING_TYPE = 'waiting';
const BATCHING_TYPE = 'batching';
function assertNever(value) {
    throw new Error(`Unhandled discriminated union member ${value}`);
}
class BatchAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    [Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const it = (0, withabort_1.wrapWithAbort)(this._source, signal)[Symbol.asyncIterator]();
        let state = { type: BATCHING_TYPE, values: [] };
        let ended = null;
        let error = null;
        function consumeNext() {
            it.next().then((res) => {
                if (res.done) {
                    ended = Promise.resolve({ done: true });
                    if (state.type === WAITING_TYPE) {
                        state.resolver.resolve(ended);
                    }
                }
                else {
                    if (state.type === WAITING_TYPE) {
                        const { resolve } = state.resolver;
                        state = { type: BATCHING_TYPE, values: [] };
                        resolve({ done: res.done, value: [res.value] });
                    }
                    else if (state.type === BATCHING_TYPE) {
                        state.values.push(res.value);
                    }
                    else {
                        assertNever(state);
                    }
                    consumeNext();
                }
            }, (err) => {
                error = err;
                if (state.type === WAITING_TYPE) {
                    state.resolver.reject(err);
                }
            });
        }
        consumeNext();
        return {
            next() {
                if (error) {
                    return Promise.reject(error);
                }
                if (state.type === BATCHING_TYPE && state.values.length > 0) {
                    const { values } = state;
                    state.values = [];
                    return Promise.resolve({ done: false, value: values });
                }
                if (ended) {
                    return ended;
                }
                if (state.type === WAITING_TYPE) {
                    throw new Error('Previous `next()` is still in progress');
                }
                return new Promise((resolve, reject) => {
                    state = {
                        type: WAITING_TYPE,
                        resolver: { resolve, reject },
                    };
                });
            },
            return(value) {
                return it.return
                    ? it.return(value).then(() => ({ done: true }))
                    : Promise.resolve({ done: true });
            },
        };
    }
}
exports.BatchAsyncIterable = BatchAsyncIterable;
/**
Returns an async iterable sequence of batches that are collected from the source sequence between
 * subsequent `next()` calls.
 *
 * @template TSource The type of elements in the source sequence.
 * @returns {OperatorAsyncFunction<TSource, TSource[]>} An operator returning an async-iterable of batches that are collection from the
 * source sequence between subsequent `next()` calls.
 */
function batch() {
    return function batchOperator(source) {
        return new BatchAsyncIterable(source);
    };
}
exports.batch = batch;

//# sourceMappingURL=batch.js.map
