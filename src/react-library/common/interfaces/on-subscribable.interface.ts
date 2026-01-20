/**
 * Describes a component that has subscribe to and unsubscribe callbacks
 */
export interface IOnSubscribable<TObserver> {
	onSubscribe: (observer: TObserver) => void;
	onUnsubscribe: (observer: TObserver) => void;
}
