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
export class DefaultScheduler {
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

//# sourceMappingURL=scheduler.mjs.map
