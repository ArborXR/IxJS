import { flatMap } from './flatmap';
import { isAsyncIterable } from '../../util/isiterable';
/**
 * Flattens the nested async-iterable by the given depth.
 *
 * @template T The type of elements in the source sequence.
 * @param {number} [depth=Infinity] The depth to flatten the async-iterable sequence if specified, otherwise infinite.
 * @returns {MonoTypeOperatorAsyncFunction<T>} An operator that flattens the async-iterable sequence.
 */
export function flat(depth = -1, concurrent = Infinity) {
    depth = (depth < 0 ? Infinity : depth);
    return function flattenOperatorFunction(source) {
        return flatMap((item) => {
            if (isAsyncIterable(item)) {
                return depth > 0 ? flat(depth - 1)(item) : item;
            }
            return [item];
        }, concurrent)(source);
    };
}

//# sourceMappingURL=flat.mjs.map
