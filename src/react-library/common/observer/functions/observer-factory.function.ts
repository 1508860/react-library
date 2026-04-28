import { generateGuid } from "../../guid";
import type { Observer } from "../types/observer.type";

/**
 * Factory for creating an observer to be consumed by a subject
 */
export function observerFactory<TState>(update: (state: TState) => void): Observer<TState> {
	return {
		id: generateGuid(),
		update: update
	};
}
