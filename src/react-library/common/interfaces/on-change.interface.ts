/**
 * For a component that has a change event
 */
export interface IOnChange<TParam, TReturn> {
	onChange: (param: TParam) => TReturn;
}
