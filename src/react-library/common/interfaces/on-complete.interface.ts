/**
 * For a component that has a complete event
 */
export interface IOnComplete<TParam, TReturn> {
	onComplete: (param: TParam) => TReturn;
}
