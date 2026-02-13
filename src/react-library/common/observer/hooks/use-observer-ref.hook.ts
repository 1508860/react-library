import { useRef, type RefObject } from "react";

import { observerFactory } from "../functions/observer-factory.function";
import type { Observer } from "../types/observer.type";

/**
 * Custom ref hook for creating an observer to be consumed by a subject
 */
export function useObserverRef<T>(update: (state: T) => void): RefObject<Observer<T>> {

	const ref = useRef<Observer<T>>(observerFactory(update));

	return ref;
}
