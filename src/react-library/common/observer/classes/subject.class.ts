import type { Guid } from "../../guid";
import type { INotify, ISubscribable, ISubscribedCount } from "../../interfaces";
import type { Callback, CallbackWithParameter } from "../../types";

import type { Observer } from "../types/observer.type";
import type { SubjectOptions } from "../types/subject-options.type";

export class Subject<TState> implements
	INotify<CallbackWithParameter<TState, void>>,
	ISubscribable<CallbackWithParameter<Observer<TState>, void>, CallbackWithParameter<Observer<TState>, void>>,
	ISubscribedCount<Callback<number>> {

	private _onSubscribe: ((observer: Observer<TState>) => void) | undefined;
	private _onUnsubscribe: ((observer: Observer<TState>) => void) | undefined;

	private readonly _observers: Map<Guid, Observer<TState>>;

	constructor(options: SubjectOptions<TState>) {
		this._observers = new Map<Guid, Observer<TState>>();
		this._onSubscribe = options.onSubscribe;
		this._onUnsubscribe = options.onUnsubscribe;
	}

	public notify(state: TState): void {
		this._observers.forEach(x => x.update(state));
	}

	public subscribe(observer: Observer<TState>): void {
		this._observers.set(observer.id, observer);
		if (this._onSubscribe) this._onSubscribe(observer);
	}

	public unsubscribe(observer: Observer<TState>): void {
		if (this._onUnsubscribe) this._onUnsubscribe(observer);
		this._observers.delete(observer.id);
	}

	public subscribedCount(): number {
		return this._observers.size;
	}
}
