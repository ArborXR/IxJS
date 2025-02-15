"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTime = void 0;
const asynciterablex_1 = require("./asynciterablex");
const _sleep_1 = require("./_sleep");
const aborterror_1 = require("../aborterror");
class GenerateTimeAsyncIterable extends asynciterablex_1.AsyncIterableX {
    _initialState;
    _condition;
    _iterate;
    _resultSelector;
    _timeSelector;
    constructor(initialState, condition, iterate, resultSelector, timeSelector) {
        super();
        this._initialState = initialState;
        this._condition = condition;
        this._iterate = iterate;
        this._resultSelector = resultSelector;
        this._timeSelector = timeSelector;
    }
    async *[Symbol.asyncIterator](signal) {
        (0, aborterror_1.throwIfAborted)(signal);
        for (let i = this._initialState; await this._condition(i, signal); i = await this._iterate(i, signal)) {
            const time = await this._timeSelector(i, signal);
            await (0, _sleep_1.sleep)(time, signal);
            yield await this._resultSelector(i, signal);
        }
    }
}
/**
 * Generates an async-iterable sequence by running a time-based state-driven loop producing the sequence's elements.
 *
 * @template TState The type of the state used in the generator loop.
 * @template TResult The type of the elements in the produced sequence.
 * @param {TState} initialState The initial state.
 * @param {((value: TState, signal?: AbortSignal) => boolean | Promise<boolean>)} condition Condition to terminate generation (upon returning false).
 * @param {((value: TState, signal?: AbortSignal) => TState | Promise<TState>)} iterate Iteration step function.
 * @param {((value: TState, signal?: AbortSignal) => TResult | Promise<TResult>)} resultSelector Selector function for results produced in
 * the sequence.
 * @param {((value: TState, signal?: AbortSignal) => number | Promise<number>)} timeSelector Selector function for how much time to wait.
 * @returns {AsyncIterableX<TResult>} The generated async-iterable sequence.
 */
function generateTime(initialState, condition, iterate, resultSelector, timeSelector) {
    return new GenerateTimeAsyncIterable(initialState, condition, iterate, resultSelector, timeSelector);
}
exports.generateTime = generateTime;

//# sourceMappingURL=generatetime.js.map
