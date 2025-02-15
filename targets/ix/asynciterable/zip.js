"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zip = exports.ZipAsyncIterable = void 0;
const withabort_1 = require("./operators/withabort");
const asynciterablex_1 = require("./asynciterablex");
const returniterator_1 = require("../util/returniterator");
const aborterror_1 = require("../aborterror");
class ZipAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _sources;
    constructor(sources) {
        super();
        this._sources = sources;
    }
    // eslint-disable-next-line consistent-return
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        const sourcesLength = this._sources.length;
        const its = this._sources.map((x) => (0, withabort_1.wrapWithAbort)(x, signal)[Symbol.asyncIterator]());
        while (sourcesLength > 0) {
            const values = new Array(sourcesLength);
            for (let i = -1; ++i < sourcesLength;) {
                const { value, done } = await its[i].next();
                if (done) {
                    await Promise.all(its.map(returniterator_1.returnAsyncIterator));
                    return undefined;
                }
                values[i] = value;
            }
            yield values;
        }
    }
}
exports.ZipAsyncIterable = ZipAsyncIterable;
function zip(...sources) {
    return new ZipAsyncIterable(sources);
}
exports.zip = zip;

//# sourceMappingURL=zip.js.map
