import { AsyncIterableX } from '../../asynciterable/asynciterablex';
import { toDOMStream, } from '../../asynciterable/todomstream';
export function toDOMStreamProto(options) {
    return !options ? toDOMStream(this) : toDOMStream(this, options);
}
AsyncIterableX.prototype.toDOMStream = toDOMStreamProto;

//# sourceMappingURL=todomstream.mjs.map
