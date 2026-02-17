/**
 * For a component that has a change event for an expanded
 */
export interface IOnExpandedChange<TParam, TReturn> {
	onExpandedChange: (param: TParam) => TReturn;
}
