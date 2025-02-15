import { AsyncIterableX } from '../asynciterablex';
import { wrapWithAbort } from '../operators/withabort';
import { AbortError, throwIfAborted } from '../../aborterror';
import { safeRace } from '../../util/safeRace';
import { isPromise } from '../../util/isiterable';
import { as as asAsyncIterable } from '../as';
const NEVER_PROMISE = new Promise(() => { });
function ignoreInnerAbortErrors(signal) {
    return function ignoreInnerAbortError(e) {
        if (signal.aborted && e instanceof AbortError) {
            return NEVER_PROMISE;
        }
        throw e;
    };
}
async function* wrapIterator(source, index, type, signal) {
    for await (const value of wrapWithAbort(source, signal)) {
        throwIfAborted(signal);
        yield { type, index, value };
    }
    return { type, index, value: undefined };
}
export class FlattenConcurrentAsyncIterable extends AsyncIterableX {
    _source;
    _selector;
    _concurrent;
    _switchMode;
    _thisArg;
    constructor(_source, _selector, _concurrent, _switchMode, _thisArg) {
        super();
        this._source = _source;
        this._selector = _selector;
        this._concurrent = _concurrent;
        this._switchMode = _switchMode;
        this._thisArg = _thisArg;
        this._concurrent = this._switchMode ? 1 : Math.max(_concurrent, 0);
    }
    async *[Symbol.asyncIterator](outerSignal) {
        throwIfAborted(outerSignal);
        let active = 0;
        let outerIndex = 0;
        let outerComplete = false;
        const thisArg = this._thisArg;
        const selector = this._selector;
        const switchMode = this._switchMode;
        const concurrent = this._concurrent;
        const outerValues = new Array(0);
        const innerIndices = new Array(0);
        const controllers = new Array(isFinite(concurrent) ? concurrent : 0);
        const inners = new Array(isFinite(concurrent) ? concurrent : 0);
        const outer = wrapIterator(this._source, 0, 0 /* OUTER */, outerSignal);
        const results = [outer.next()];
        try {
            while (1) {
                const { done = false, value: { type, value, index }, } = await safeRace(results);
                if (!done) {
                    switch (type) {
                        case 0 /* OUTER */: {
                            if (switchMode) {
                                active = 0;
                            }
                            if (active < concurrent) {
                                pullNextOuter(value);
                            }
                            else {
                                outerValues.push(value);
                            }
                            results[0] = outer.next();
                            break;
                        }
                        case 1 /* INNER */: {
                            yield value;
                            results[index] = pullNextInner(index);
                            break;
                        }
                    }
                }
                else {
                    // ignore this result slot
                    results[index] = NEVER_PROMISE;
                    switch (type) {
                        case 0 /* OUTER */:
                            outerComplete = true;
                            break;
                        case 1 /* INNER */:
                            --active;
                            // return the current slot to the pool
                            innerIndices.push(index);
                            // synchronously drain the `outerValues` buffer
                            while (active < concurrent && outerValues.length) {
                                // Don't use `await` so we avoid blocking while the number of active inner sequences is less than `concurrent`.
                                pullNextOuter(outerValues.shift());
                            }
                            break;
                    }
                    if (outerComplete && active + outerValues.length === 0) {
                        return;
                    }
                }
            }
        }
        finally {
            controllers.forEach((controller) => {
                controller?.abort();
            });
        }
        function pullNextInner(index) {
            const result = inners[index - 1].next();
            const { [index - 1]: controller } = controllers;
            return result.catch(ignoreInnerAbortErrors(controller.signal));
        }
        function pullNextOuter(outerValue) {
            ++active;
            const index = innerIndices.pop() || active;
            // abort the current inner iterator first
            if (switchMode && controllers[index - 1]) {
                controllers[index - 1].abort();
            }
            controllers[index - 1] = new AbortController();
            const innerSignal = controllers[index - 1].signal;
            // Get the next inner sequence.
            // `selector` is a sync or async function that returns AsyncIterableInput.
            const inner = selector.call(thisArg, outerValue, outerIndex++, innerSignal);
            const wrapAndPullInner = (inner) => {
                inners[index - 1] = wrapIterator(asAsyncIterable(inner), index, 1 /* INNER */, innerSignal);
                return pullNextInner(index);
            };
            results[index] = isPromise(inner)
                ? inner.then(wrapAndPullInner)
                : wrapAndPullInner(inner);
        }
    }
}

//# sourceMappingURL=_flatten.mjs.map
