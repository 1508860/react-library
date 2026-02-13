import type { Guid } from "../../guid";
import type { INotify, IOnSubscribable, ISubscribable, ISubscribedCount } from "../../interfaces";
import type { Observer } from "../types/observer.type";

export class Subject<T> implements INotify<T>, ISubscribable<Observer<T>>, ISubscribedCount {

	private _onSubscribe: ((observer: Observer<T>) => void) | undefined;
	private _onUnsubscribe: ((observer: Observer<T>) => void) | undefined;

	private readonly _observers: Map<Guid, Observer<T>>;

	constructor(
		options: Partial<IOnSubscribable<Observer<T>>>
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
