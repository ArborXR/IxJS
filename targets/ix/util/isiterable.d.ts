import { Observable } from '../observer';
/** @ignore */
export declare const isFunction: (x: any) => x is Function;
/** @ignore */
export declare const isObject: (x: any) => x is Object;
/** @ignore */
export declare const isPromise: (x: any) => x is PromiseLike<any>;
/** @ignore */
export declare function isArrayLike(x: any): x is ArrayLike<any>;
/** @ignore */
export declare function isIterable(x: any): x is Iterable<any>;
/** @ignore */
export declare function isIterator(x: any): x is Iterable<any>;
/** @ignore */
export declare function isAsyncIterable(x: any): x is AsyncIterable<any>;
/** @ignore */
export declare function isObservable(x: any): x is Observable<any>;
/** @ignore */
export declare const isReadableNodeStream: (x: any) => x is NodeJS.ReadableStream;
/** @ignore */
export declare const isWritableNodeStream: (x: any) => x is NodeJS.WritableStream;
/** @ignore */
export declare const isReadableDOMStream: <T = any>(x: any) => x is ReadableStream<T>;
/** @ignore */
export declare const isWritableDOMStream: <T = any>(x: any) => x is WritableStream<T>;
/** @ignore */
export declare const isFetchResponse: (x: any) => x is Response;
