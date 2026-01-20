/**
 * Describes a component that can be subscribed to and unsubscribed from
 */
export interface ISubscribable<TObserver> {
	subscribe: (observer: TObserver) => void;
	unsubscribe: (observer: TObserver) => void;
}
