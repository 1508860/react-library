/**
 * For a component that can have an update callback
 */
export interface IUpdate<TParam, TReturn> {
	update(param: TParam): TReturn;
}
