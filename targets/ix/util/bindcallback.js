"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindCallback = void 0;
/**
 * @ignore
 */
function bindCallback(func, thisArg, argCount) {
    if (typeof thisArg === 'undefined') {
        return func;
    }
    switch (argCount) {
        case 0:
            return function () {
                return func.call(thisArg);
            };
        case 1:
            return function (arg) {
                return func.call(thisArg, arg);
            };
        case 2:
            return function (value, index) {
                return func.call(thisArg, value, index);
            };
        case 3:
            return function (value, index, collection) {
                return func.call(thisArg, value, index, collection);
            };
        default:
            return function () {
                return func.apply(thisArg, arguments);
            };
    }
}
exports.bindCallback = bindCallback;

//# sourceMappingURL=bindcallback.js.map
