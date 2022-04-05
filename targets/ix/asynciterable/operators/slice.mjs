import { AsyncIterableX } from '../asynciterablex';
import { wrapWithAbort } from './withabort';
import { throwIfAborted } from '../../aborterror';
export class SliceAsyncIterable extends AsyncIterableX {
    _source;
    _begin;
    _end;
    constructor(source, begin, end) {
        super();
        this._source = source;
        this._begin = begin;
        this._end = end;
    }
    async *[Symbol.asyncIterator](signal) {
        throwIfAborted(signal);
        const source = wrapWithAbort(this._source, signal);
        const it = source[Symbol.asyncIterator]();
        let begin = this._begin;
        let next;
        while (begin > 0 && !(next = await it.next()).done) {
            begin--;
        }
        let end = this._end;
        if (end > 0) {
            while (!(next = await it.next()).done) {
                yield next.value;
                if (--end === 0) {
                    break;
                }
            }
        }
    }
}
/**
 * Returns the elements from the source async-iterable sequence only after the function that returns a promise produces an element.
 *
 * @template TSource The type of elements in the source sequence.
 * @param {number} begin Zero-based index at which to begin extraction.
 * @param {number} [end=Infinity] Zero-based index before which to end extraction.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} An async-iterable containing the extracted elements.
 */
export function slice(begin, end = Infinity) {
    return function sliceOperatorFunction(source) {
        return new SliceAsyncIterable(source, begin, end);
    };
}

//# sourceMappingURL=slice.mjs.map
