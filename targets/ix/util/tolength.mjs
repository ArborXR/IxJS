import { toInteger } from './tointeger';
const maxSafeInteger = Math.pow(2, 53) - 1;
/**
 * @ignore
 */
export function toLength(value) {
    const len = toInteger(value);
    return Math.min(Math.max(len, 0), maxSafeInteger);
}

//# sourceMappingURL=tolength.mjs.map
