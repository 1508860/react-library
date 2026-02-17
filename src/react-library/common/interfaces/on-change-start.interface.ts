/**
 * For a component that has a change start event
 */
export interface IOnChangeStart<TParam, TReturn> {
	onChangeStart: (param: TParam) => TReturn;
}
