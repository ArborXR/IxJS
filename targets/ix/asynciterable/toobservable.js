"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toObservable = void 0;
const toobserver_1 = require("../util/toobserver");
const observer_1 = require("../observer");
class BooleanSubscription {
    isUnsubscribed = false;
    unsubscribe() {
        this.isUnsubscribed = true;
    }
}
class AsyncIterableObservable {
    _source;
    constructor(source) {
        this._source = source;
    }
    [observer_1.observable]() {
        return this;
    }
    subscribe(next, error, complete) {
        const observer = (0, toobserver_1.toObserver)(next, error, complete);
        const subscription = new BooleanSubscription();
        const it = this._source[Symbol.asyncIterator]();
        const f = () => {
            it.next()
                .then(({ value, done }) => {
                if (!subscription.isUnsubscribed) {
                    if (done) {
                        observer.complete();
                    }
                    else {
                        observer.next(value);
                        f();
                    }
                }
            })
                .catch((err) => {
                if (!subscription.isUnsubscribed) {
                    observer.error(err);
                }
            });
        };
        f();
        return subscription;
    }
}
/**
 * Converts the async-iterable sequence to an observable.
 *
 * @template TSource The type of the elements in the source sequence.
 * @param {AsyncIterable<TSource>} source The async-iterable to convert to an observable.
 * @returns {Observable<TSource>} The observable containing the elements from the async-iterable.
 */
function toObservable(source) {
    return new AsyncIterableObservable(source);
}
exports.toObservable = toObservable;

//# sourceMappingURL=toobservable.js.map
