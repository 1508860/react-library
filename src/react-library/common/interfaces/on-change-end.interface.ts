/**
 * For a component that has a change end event
 */
export interface IOnChangeEnd<TParam, TReturn> {
	onChangeEnd: (param: TParam) => TReturn;
}
