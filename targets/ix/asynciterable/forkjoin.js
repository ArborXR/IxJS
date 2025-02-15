"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forkJoin = void 0;
const identity_1 = require("../util/identity");
const withabort_1 = require("./operators/withabort");
const safeRace_1 = require("../util/safeRace");
// eslint-disable-next-line @typescript-eslint/no-empty-function
const NEVER_PROMISE = new Promise(() => { });
function wrapPromiseWithIndex(promise, index) {
    return promise.then((value) => ({ value, index }));
}
/**
 * Runs all specified async-iterable sequences in parallel and collects their last elements.
 *
 * @template T The type of the elements in the source sequences.
 * @param {...any[]} sources Async-iterable sequence to collect the last elements for.
 * @returns {(Promise<T[] | undefined>)} An async-iterable sequence with an array of all the last elements of all sequences.
 */
async function forkJoin(...sources) {
    let signal = sources.shift();
    if (!(signal instanceof AbortSignal)) {
        sources.unshift(signal);
        signal = undefined;
    }
    const length = sources.length;
    const iterators = new Array(length);
    const nexts = new Array(length);
    let active = length;
    const values = new Array(length);
    const hasValues = new Array(length);
    hasValues.fill(false);
    for (let i = 0; i < length; i++) {
        const iterator = (0, withabort_1.wrapWithAbort)(sources[i], signal)[Symbol.asyncIterator]();
        iterators[i] = iterator;
        nexts[i] = wrapPromiseWithIndex(iterator.next(), i);
    }
    while (active > 0) {
        const next = (0, safeRace_1.safeRace)(nexts);
        const { value: next$, index } = await next;
        if (next$.done) {
            nexts[index] = NEVER_PROMISE;
            active--;
        }
        else {
            const iterator$ = iterators[index];
            nexts[index] = wrapPromiseWithIndex(iterator$.next(), index);
            hasValues[index] = true;
            values[index] = next$.value;
        }
    }
    if (hasValues.length > 0 && hasValues.every(identity_1.identity)) {
        return values;
    }
    return undefined;
}
exports.forkJoin = forkJoin;

//# sourceMappingURL=forkjoin.js.map
