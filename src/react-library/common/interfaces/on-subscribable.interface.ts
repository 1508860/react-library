/**
 * Describes a component that has subscribe to and unsubscribe from events
 */
export interface IOnSubscribable<TOnSubscribe, TOnUnsubscribe> {
	onSubscribe: TOnSubscribe;
	onUnsubscribe: TOnUnsubscribe;
}
