"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultScheduler = void 0;
class ActionSubscription {
    isUnsubscribed = false;
    _action;
    constructor(action) {
        this._action = action;
    }
    unsubscribe() {
        if (!this.isUnsubscribed) {
            this.isUnsubscribed = true;
            this._action();
        }
    }
}
class DefaultScheduler {
    get now() {
        return Date.now();
    }
    delay(dueTime) {
        return new Promise((res) => setTimeout(res, dueTime));
    }
    schedule(action, dueTime) {
        const id = setTimeout(() => action(), dueTime);
        return new ActionSubscription(() => clearTimeout(id));
    }
}
exports.DefaultScheduler = DefaultScheduler;

//# sourceMappingURL=scheduler.js.map
