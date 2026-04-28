import { useRef, type RefObject } from "react";

import { observerFactory } from "../functions/observer-factory.function";
import type { Observer } from "../types/observer.type";

/**
 * Custom ref hook for creating an observer to be consumed by a subject
 */
export function useObserverRef<TState>(update: (state: TState) => void): RefObject<Observer<TState>> {

	const ref = useRef<Observer<TState>>(observerFactory(update));

	return ref;
}
