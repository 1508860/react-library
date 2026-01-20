import type { Guid } from "../../guid";
import type { IId } from "../../interfaces";

/**
 * Describes an observer that can be updated to perform some kind of action
 */
export interface IObserver<T> extends IId<Guid> {
	update(state: T): void;
}
