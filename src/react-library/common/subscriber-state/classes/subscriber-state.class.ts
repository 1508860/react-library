import type { Guid } from "../../guid";
import type { ISubscribable, ISubscribedCount } from "../../interfaces";
import type { Callback, CallbackWithParameter } from "../../types";

import type { SubscriberStateOptions } from "../types/subscriber-state-options.type";
import type { Subscriber } from "../types/subscriber.type";

export class SubscriberState<TState> implements
	ISubscribable<CallbackWithParameter<Subscriber<TState>, void>, CallbackWithParameter<Subscriber<TState>, void>>,
	ISubscribedCount<Callback<number>> {

	private _onSubscribeChange: CallbackWithParameter<Array<Subscriber<TState>>, void>;

	private readonly _subscribers: Map<Guid, Subscriber<TState>>;

	constructor(options: SubscriberStateOptions<TState>) {
		this._subscribers = new Map<Guid, Subscriber<TState>>();
		this._onSubscribeChange = options.onSubscribeChange;
	}

	public subscribe(subscriber: Subscriber<TState>): void {
		this._subscribers.set(subscriber.id, subscriber);
		this._onSubscribeChange(this.values());
	}

	public unsubscribe(subscriber: Subscriber<TState>): void {
		this._subscribers.delete(subscriber.id);
		this._onSubscribeChange(this.values());
	}

	public subscribedCount(): number {
		return this._subscribers.size;
	}

	private values(): Array<Subscriber<TState>> {
		const values = Array.from(this._subscribers.values());
		return values;
	}
}
