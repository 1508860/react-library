import { useCallback, useRef, useState } from "react";

import type { UseCounterState } from "./types/use-counter-state.type";

/**
 * Describes use state hook to handle incrementing and decrementing a counter value
 * It also has the facility to set the counter to a specific value and to reset it to the initial value
 * @param initialValue
 */
export function useCounterState(initialValue: number): UseCounterState {

	const initialValueRef = useRef<number>(initialValue);
	const [state, setState] = useState<number>(() => initialValue);

	const increment = useCallback(() => setState((prev) => prev + 1), []);
	const decrement = useCallback(() => setState((prev) => prev - 1), []);
	const reset = useCallback(() => setState(initialValueRef.current), []);

	return {
		decrement: decrement,
		increment: increment,
		reset: reset,
		set: setState,
		state: state
	};
}
