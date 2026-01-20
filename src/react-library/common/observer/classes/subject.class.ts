import type { Guid } from "../../guid";
import type { INotify, IOnSubscribable, ISubscribable, ISubscribedCount } from "../../interfaces";
import type { IObserver } from "../interfaces/observer.interface";

export class Subject<T> implements INotify<T>, ISubscribable<IObserver<T>>, ISubscribedCount {

	private _onSubscribe: ((observer: IObserver<T>) => void) | undefined;
	private _onUnsubscribe: ((observer: IObserver<T>) => void) | undefined;

	private readonly _observers: Map<Guid, IObserver<T>>;

	constructor(
		options: Partial<IOnSubscribable<IObserver<T>>>
	) {
		this._observers = new Map<Guid, IObserver<T>>();
		this._onSubscribe = options.onSubscribe;
		this._onUnsubscribe = options.onUnsubscribe;
	}

	public notify(state: T): void {
		this._observers.forEach(x => x.update(state));
	}

	public subscribe(observer: IObserver<T>): void {
		this._observers.set(observer.id, observer);
		if (this._onSubscribe) this._onSubscribe(observer);
	}

	public unsubscribe(observer: IObserver<T>): void {
		if (this._onUnsubscribe) this._onUnsubscribe(observer);
		this._observers.delete(observer.id);
	}

	public subscribedCount(): number {
		return this._observers.size;
	}
}
