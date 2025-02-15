"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.race = exports.RaceAsyncIterable = void 0;
const asynciterablex_1 = require("./asynciterablex");
const withabort_1 = require("./operators/withabort");
const aborterror_1 = require("../aborterror");
const safeRace_1 = require("../util/safeRace");
function wrapPromiseWithIndex(promise, index) {
    return promise.then((value) => ({ value, index }));
}
class RaceAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _sources;
    constructor(sources) {
        super();
        this._sources = sources;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const sources = this._sources;
        const length = sources.length;
        const iterators = new Array(length);
        const nexts = new Array(length);
        for (let i = 0; i < length; i++) {
            const iterator = (0, withabort_1.wrapWithAbort)(sources[i], signal)[Symbol.asyncIterator]();
            iterators[i] = iterator;
            nexts[i] = wrapPromiseWithIndex(iterator.next(), i);
        }
        const next = (0, safeRace_1.safeRace)(nexts);
        const { value: next$, index } = await next;
        if (!next$.done) {
            yield next$.value;
        }
        const iterator$ = iterators[index];
        // Cancel/finish other iterators
        for (let i = 0; i < length; i++) {
            if (i === index) {
                continue;
            }
            const otherIterator = iterators[i];
            if (otherIterator.return) {
                otherIterator.return();
            }
        }
        let nextItem;
        while (!(nextItem = await iterator$.next()).done) {
            yield nextItem.value;
        }
    }
}
exports.RaceAsyncIterable = RaceAsyncIterable;
/**
 * Propagates the async sequence that reacts first.
 *
 * @param {...AsyncIterable<T>[]} sources The source sequences.
 * @return {AsyncIterable<T>} An async sequence that surfaces either of the given sequences, whichever reacted first.
 */
function race(...sources) {
    return new RaceAsyncIterable(sources);
}
exports.race = race;

//# sourceMappingURL=race.js.map
