import { fromEventPattern } from './fromeventpattern';
function isNodeEventEmitter(obj) {
    return !!obj && typeof obj.addListener === 'function' && typeof obj.removeListener === 'function';
}
function isEventTarget(obj) {
    return (!!obj &&
        typeof obj.addEventListener === 'function' &&
        typeof obj.removeEventListener === 'function');
}
/**
 * Converts an event emitter event into an async-iterable stream.
 *
 * @template TSource The type of elements in the emitter stream.
 * @param {EventedTarget} obj The object that emits the events to turn into an async-iterable.
 * @param {string} type The name of the event to listen for creation of the async-iterable.
 * @param {EventListenerOptions} [options] The options for listening to the events such as capture, passive and once.
 * @returns {AsyncIterableX<TSource>} An async-iterable sequence created from the events emitted from the evented target.
 */
export function fromEvent(obj, type, options) {
    if (isEventTarget(obj)) {
        const target = obj;
        return fromEventPattern((h) => target.addEventListener(type, h, options), (h) => target.removeEventListener(type, h, options));
    }
    else if (isNodeEventEmitter(obj)) {
        const target = obj;
        return fromEventPattern((h) => target.addListener(type, h), (h) => target.removeListener(type, h));
    }
    else {
        throw new TypeError('Unsupported event target');
    }
}

//# sourceMappingURL=fromevent.mjs.map
