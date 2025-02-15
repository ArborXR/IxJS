import { isFunction } from './isiterable';
const noop = (_) => {
    /**/
};
// eslint-disable-next-line complexity
export function toObserver(next, error, complete) {
    const observer = next;
    if (observer && typeof observer === 'object') {
        return {
            next: isFunction(observer.next) ? (x) => observer.next(x) : noop,
            error: isFunction(observer.error) ? (e) => observer.error(e) : noop,
            complete: isFunction(observer.complete) ? () => observer.complete() : noop,
        };
    }
    return {
        next: isFunction(next) ? next : noop,
        error: isFunction(error) ? error : noop,
        complete: isFunction(complete) ? complete : noop,
    };
}

//# sourceMappingURL=toobserver.mjs.map
