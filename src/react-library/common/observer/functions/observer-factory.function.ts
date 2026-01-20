import { generateGuid } from "../../guid";
import type { IObserver } from "../interfaces/observer.interface";

/**
 * Factory for creating an observer to be consumed by a subject
 */
export function observerFactory<T>(update: (state: T) => void): IObserver<T> {
	return {
		id: generateGuid(),
		update: update
	};
}
