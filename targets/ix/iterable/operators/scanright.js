"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanRight = exports.ScanRightIterable = void 0;
const iterablex_1 = require("../iterablex");
const toarray_1 = require("../toarray");
class ScanRightIterable extends iterablex_1.IterableX {
    _source;
    _fn;
    _seed;
    _hasSeed;
    constructor(source, options) {
        super();
        this._source = source;
        this._fn = options['callback'];
        this._hasSeed = options.hasOwnProperty('seed');
        this._seed = options['seed'];
    }
    *[Symbol.iterator]() {
        let hasValue = false;
        let acc = this._seed;
        const source = (0, toarray_1.toArray)(this._source);
        for (let offset = source.length - 1; offset >= 0; offset--) {
            const item = source[offset];
            if (hasValue || (hasValue = this._hasSeed)) {
                acc = this._fn(acc, item, offset);
                yield acc;
            }
            else {
                acc = item;
                hasValue = true;
            }
        }
    }
}
exports.ScanRightIterable = ScanRightIterable;
function scanRight(optionsOrAccumulator, seed) {
    const options = 
    // eslint-disable-next-line no-nested-ternary
    typeof optionsOrAccumulator === 'function'
        ? arguments.length > 1
            ? // prettier-ignore
                { 'callback': optionsOrAccumulator, 'seed': seed }
            : // prettier-ignore
                { 'callback': optionsOrAccumulator }
        : optionsOrAccumulator;
    return function scanRightOperatorFunction(source) {
        return new ScanRightIterable(source, options);
    };
}
exports.scanRight = scanRight;

//# sourceMappingURL=scanright.js.map
