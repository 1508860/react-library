/**
 * Describes a component that can be subscribed to and unsubscribed from
 */
export interface ISubscribable<TSubscribe, TUnsubscribe> {
	subscribe: TSubscribe;
	unsubscribe: TUnsubscribe;
}
