/**
 * For a component that has a dismiss event
 */
export interface IOnDismiss<TReturn> {
	onDismiss: () => TReturn;
}
