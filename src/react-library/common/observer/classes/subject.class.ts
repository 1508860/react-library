import type { Guid } from "../../guid";
import type { INotify, IOnSubscribable, ISubscribable, ISubscribedCount } from "../../interfaces";
import type { Callback, CallbackWithParameter } from "../../types";

import type { Observer } from "../types/observer.type";

export class Subject<T> implements
	INotify<CallbackWithParameter<T, void>>,
	ISubscribable<CallbackWithParameter<Observer<T>, void>, CallbackWithParameter<Observer<T>, void>>,
	ISubscribedCount<Callback<number>> {

	private _onSubscribe: ((observer: Observer<T>) => void) | undefined;
	private _onUnsubscribe: ((observer: Observer<T>) => void) | undefined;

	private readonly _observers: Map<Guid, Observer<T>>;

	constructor(
		options: Partial<IOnSubscribable<CallbackWithParameter<Observer<T>, void>, CallbackWithParameter<Observer<T>, void>>>
	) {
		this._observers = new Map<Guid, Observer<T>>();
		this._onSubscribe = options.onSubscribe;
		this._onUnsubscribe = options.onUnsubscribe;
	}

	public notify(state: T): void {
		this._observers.forEach(x => x.update(state));
	}

	public subscribe(observer: Observer<T>): void {
		this._observers.set(observer.id, observer);
		if (this._onSubscribe) this._onSubscribe(observer);
	}

	public unsubscribe(observer: Observer<T>): void {
		if (this._onUnsubscribe) this._onUnsubscribe(observer);
		this._observers.delete(observer.id);
	}

	public subscribedCount(): number {
		return this._observers.size;
	}
}
