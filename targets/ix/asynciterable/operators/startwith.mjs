import { AsyncIterableX } from '../asynciterablex';
import { wrapWithAbort } from './withabort';
import { throwIfAborted } from '../../aborterror';
export class StartWithAsyncIterable extends AsyncIterableX {
    _source;
    _args;
    constructor(source, args) {
        super();
        this._source = source;
        this._args = args;
    }
    async *[Symbol.asyncIterator](signal) {
        throwIfAborted(signal);
        for (const x of this._args) {
            yield x;
        }
        for await (const item of wrapWithAbort(this._source, signal)) {
            yield item;
        }
    }
}
/**
 * Prepend a value to an async-iterable sequence.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {...TSource[]} args Elements to prepend to the specified sequence.
 * @returns {MonoTypeOperatorAsyncFunction<TSource>} The source sequence prepended with the specified values.
 */
export function startWith(...args) {
    return function startWithOperatorFunction(source) {
        return new StartWithAsyncIterable(source, args);
    };
}

//# sourceMappingURL=startwith.mjs.map
