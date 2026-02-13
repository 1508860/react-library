import { generateGuid } from "../../guid";
import type { Observer } from "../types/observer.type";

/**
 * Factory for creating an observer to be consumed by a subject
 */
export function observerFactory<T>(update: (state: T) => void): Observer<T> {
	return {
		id: generateGuid(),
		update: update
	};
}
