/**
 * For a component that has a value change event
 */
export interface IOnValueChange<TParam> {
	onValueChange: (param: TParam) => void;
}
