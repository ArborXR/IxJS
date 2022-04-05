import { AsyncIterableX } from '../../asynciterable/asynciterablex';
/**
 * @ignore
 */
export declare function switchMapProto<T extends unknown, R extends AsyncIterable<any>>(this: AsyncIterableX<T>, selector: (value: T, index: number, signal?: AbortSignal) => R | Promise<R>, thisArg?: any): AsyncIterableX<R>;
declare module '../../asynciterable/asynciterablex' {
    interface AsyncIterableX<T> {
        switchMap: typeof switchMapProto;
    }
}
