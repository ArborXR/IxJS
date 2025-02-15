"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._initialize = exports.FromObservableAsyncIterable = exports.FromPromiseIterable = exports.FromAsyncIterable = exports.FromArrayIterable = exports.from = void 0;
const identity_1 = require("../util/identity");
const bindcallback_1 = require("../util/bindcallback");
const isiterable_1 = require("../util/isiterable");
const tolength_1 = require("../util/tolength");
const asyncsink_1 = require("./asyncsink");
const aborterror_1 = require("../aborterror");
function _initialize(Ctor) {
    /** @nocollapse */
    exports.from = function (source, selector = identity_1.identityAsync, thisArg) {
        const fn = (0, bindcallback_1.bindCallback)(selector, thisArg, 2);
        if ((0, isiterable_1.isIterable)(source) || (0, isiterable_1.isAsyncIterable)(source)) {
            return new exports.FromAsyncIterable(source, fn);
        }
        if ((0, isiterable_1.isPromise)(source)) {
            return new exports.FromPromiseIterable(source, fn);
        }
        if ((0, isiterable_1.isObservable)(source)) {
            return new exports.FromObservableAsyncIterable(source, fn);
        }
        if ((0, isiterable_1.isArrayLike)(source)) {
            return new exports.FromArrayIterable(source, fn);
        }
        if ((0, isiterable_1.isIterator)(source)) {
            return new exports.FromAsyncIterable({ [Symbol.asyncIterator]: () => source }, fn);
        }
        throw new TypeError('Input type not supported');
    };
    // eslint-disable-next-line no-shadow
    exports.FromArrayIterable = class FromArrayIterable extends Ctor {
        _source;
        _selector;
        constructor(source, selector) {
            super();
            this._source = source;
            this._selector = selector;
        }
        async *[Symbol.asyncIterator]() {
            let i = 0;
            const length = (0, tolength_1.toLength)(this._source.length);
            while (i < length) {
                yield await this._selector(this._source[i], i++);
            }
        }
    };
    // eslint-disable-next-line no-shadow
    exports.FromAsyncIterable = class FromAsyncIterable extends Ctor {
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
    exports.FromPromiseIterable = class FromPromiseIterable extends Ctor {
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
    exports.FromObservableAsyncIterable = class FromObservableAsyncIterable extends Ctor {
        _observable;
        _selector;
        constructor(observable, selector) {
            super();
            this._observable = observable;
            this._selector = selector;
        }
        async *[Symbol.asyncIterator](signal) {
            (0, aborterror_1.throwIfAborted)(signal);
            const sink = new asyncsink_1.AsyncSink();
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
                sink.error(new aborterror_1.AbortError());
            }
            if (signal) {
                signal.addEventListener('abort', onAbort);
            }
            let i = 0;
            try {
                for (let next; !(next = await sink.next()).done;) {
                    (0, aborterror_1.throwIfAborted)(signal);
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
exports._initialize = _initialize;

//# sourceMappingURL=from.js.map
