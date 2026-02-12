import { useRef, type RefObject } from "react";

import { observerFactory } from "../functions/observer-factory.function";
import type { IObserver } from "../interfaces/observer.interface";

/**
 * Custom ref hook for creating an observer to be consumed by a subject
 */
export function useObserverRef<T>(update: (state: T) => void): RefObject<IObserver<T>> {

	const ref = useRef<IObserver<T>>(observerFactory(update));

	return ref;
}
