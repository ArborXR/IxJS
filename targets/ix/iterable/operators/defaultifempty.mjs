import { IterableX } from '../iterablex';
export class DefaultIfEmptyIterable extends IterableX {
    _source;
    _defaultValue;
    constructor(source, defaultValue) {
        super();
        this._source = source;
        this._defaultValue = defaultValue;
    }
    *[Symbol.iterator]() {
        let state = 1;
        for (const item of this._source) {
            state = 2;
            yield item;
        }
        if (state === 1) {
            yield this._defaultValue;
        }
    }
}
/**
 * Returns the elements of the specified sequence or the default value in a singleton sequence
 * if the sequence is empty.
 *
 * @template T The type of elements in the source sequence.
 * @param {T} defaultValue The value to return if the sequence is empty.
 * @returns {MonoTypeOperatorFunction<T>} An operator which returns the elements of the source sequence or the default value as a singleton.
 */
export function defaultIfEmpty(defaultValue) {
    return function defaultIfEmptyOperatorFunction(source) {
        return new DefaultIfEmptyIterable(source, defaultValue);
    };
}

//# sourceMappingURL=defaultifempty.mjs.map
