/**
 * Type to describe a callback function
 */
export type Callback<TResult> = () => TResult;

/**
 * Type to describe a callback function with 1 parameter
 */
export type CallbackWithParameter<TParam, TResult> = (param: TParam) => TResult;

/**
 * Type to describe a callback function with 2 parameters
 */
export type CallbackWith2Parameters<TParam1, TParam2, TResult> = (param1: TParam1, param2: TParam2) => TResult;
