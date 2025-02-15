"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toObserver = void 0;
const isiterable_1 = require("./isiterable");
const noop = (_) => {
    /**/
};
// eslint-disable-next-line complexity
function toObserver(next, error, complete) {
    const observer = next;
    if (observer && typeof observer === 'object') {
        return {
            next: (0, isiterable_1.isFunction)(observer.next) ? (x) => observer.next(x) : noop,
            error: (0, isiterable_1.isFunction)(observer.error) ? (e) => observer.error(e) : noop,
            complete: (0, isiterable_1.isFunction)(observer.complete) ? () => observer.complete() : noop,
        };
    }
    return {
        next: (0, isiterable_1.isFunction)(next) ? next : noop,
        error: (0, isiterable_1.isFunction)(error) ? error : noop,
        complete: (0, isiterable_1.isFunction)(complete) ? complete : noop,
    };
}
exports.toObserver = toObserver;

//# sourceMappingURL=toobserver.js.map
