/**
 * Type to describe a callback function
 */
export type Callback<TResult> = () => TResult;

/**
 * Type to describe a callback function with 1 parameter
 */
export type CallbackWithParameter<TParam, TResult> = (param: TParam) => TResult;
