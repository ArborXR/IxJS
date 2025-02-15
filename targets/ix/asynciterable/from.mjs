import { identityAsync } from '../util/identity';
import { bindCallback } from '../util/bindcallback';
import { isIterable, isAsyncIterable, isArrayLike, isIterator, isPromise, isObservable, } from '../util/isiterable';
import { toLength } from '../util/tolength';
import { AsyncSink } from './asyncsink';
import { AbortError, throwIfAborted } from '../aborterror';
export let from;
export let FromArrayIterable;
export let FromAsyncIterable;
export let FromPromiseIterable;
export let FromObservableAsyncIterable;
export function _initialize(Ctor) {
    /** @nocollapse */
    from = function (source, selector = identityAsync, thisArg) {
        const fn = bindCallback(selector, thisArg, 2);
        if (isIterable(source) || isAsyncIterable(source)) {
            return new FromAsyncIterable(source, fn);
        }
        if (isPromise(source)) {
            return new FromPromiseIterable(source, fn);
        }
        if (isObservable(source)) {
            return new FromObservableAsyncIterable(source, fn);
        }
        if (isArrayLike(source)) {
            return new FromArrayIterable(source, fn);
        }
        if (isIterator(source)) {
            return new FromAsyncIterable({ [Symbol.asyncIterator]: () => source }, fn);
        }
        throw new TypeError('Input type not supported');
    };
    // eslint-disable-next-line no-shadow
    FromArrayIterable = class FromArrayIterable extends Ctor {
        _source;
        _selector;
        constructor(source, selector) {
            super();
            this._source = source;
            this._selector = selector;
        }
        async *[Symbol.asyncIterator]() {
            let i = 0;
            const length = toLength(this._source.length);
            while (i < length) {
                yield await this._selector(this._source[i], i++);
            }
        }
    };
    // eslint-disable-next-line no-shadow
    FromAsyncIterable = class FromAsyncIterable extends Ctor {
        _source;
        _selector;
        constructor(source, selector) {
            super();
            this._source = source;
            this._selector = selector;
        }
        async *[Symbol.asyncIterator]() {
            let i = 0;
            for await (const item of this._source) {
                yield await this._selector(item, i++);
            }
        }
    };
    // eslint-disable-next-line no-shadow
    FromPromiseIterable = class FromPromiseIterable extends Ctor {
        _source;
        _selector;
        constructor(source, selector) {
            super();
            this._source = source;
            this._selector = selector;
        }
        async *[Symbol.asyncIterator]() {
            const item = await this._source;
            yield await this._selector(item, 0);
        }
    };
    // eslint-disable-next-line no-shadow
    FromObservableAsyncIterable = class FromObservableAsyncIterable extends Ctor {
        _observable;
        _selector;
        constructor(observable, selector) {
            super();
            this._observable = observable;
            this._selector = selector;
        }
        async *[Symbol.asyncIterator](signal) {
            throwIfAborted(signal);
            const sink = new AsyncSink();
            const subscription = this._observable.subscribe({
                next(value) {
                    sink.write(value);
                },
                error(err) {
                    sink.error(err);
                },
                complete() {
                    sink.end();
                },
            });
            function onAbort() {
                sink.error(new AbortError());
            }
            if (signal) {
                signal.addEventListener('abort', onAbort);
            }
            let i = 0;
            try {
                for (let next; !(next = await sink.next()).done;) {
                    throwIfAborted(signal);
                    yield await this._selector(next.value, i++);
                }
            }
            finally {
                if (signal) {
                    signal.removeEventListener('abort', onAbort);
                }
                subscription.unsubscribe();
            }
        }
    };
}

//# sourceMappingURL=from.mjs.map
