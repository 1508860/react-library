/**
 * For a component that has a init event
 */
export interface IOnInit<TReturn> {
	onInit: () => TReturn;
}
