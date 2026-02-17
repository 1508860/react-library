/**
 * For a component that has an item change event
 */
export interface IOnItemChange<TParam, TReturn> {
	onItemChange: (param: TParam) => TReturn;
}
