import { IterableX } from './iterablex';
export class OnErrorResumeNextIterable extends IterableX {
    _source;
    constructor(source) {
        super();
        this._source = source;
    }
    *[Symbol.iterator]() {
        for (const item of this._source) {
            const it = item[Symbol.iterator]();
            while (1) {
                let next;
                try {
                    next = it.next();
                }
                catch (e) {
                    break;
                }
                if (next.done) {
                    break;
                }
                yield next.value;
            }
        }
    }
}
/**
 * Concatenates all of the specified iterable sequences, even if the previous iterable sequence terminated exceptionally.
 *
 * @template T The type of the elements in the source sequences.
 * @param {...Iterable<T>[]} args iterable sequences to concatenate.
 * @returns {IterableX<T>} An iterable sequence that concatenates the source sequences, even if a sequence terminates exceptionally.
 */
export function onErrorResumeNext(...source) {
    return new OnErrorResumeNextIterable(source);
}

//# sourceMappingURL=onerrorresumenext.mjs.map
