import { useEffect, useRef, useState } from "react";

import type { Callback } from "../../types";

import type { UseResolveStateEqualityCallback } from "./types/use-resolve-state-equality-callback.type";

/**
 * Custom hook to handle resolving some state based on a resolve state callback changing
 * Note: The callbacks being passed in should be a consistent reference, only updating state when the result would change.
 * Suggest passing in a callback derived from a useCallback hook
 * @param resolveStateCallback
 * @param equalityCallback Optional callback to check if the previous and new states are equal to prevent unnecessary state changes
 */
export function useResolveState<TResult>(
	resolveStateCallback: Callback<TResult>,
	equalityCallback?: UseResolveStateEqualityCallback<TResult>
): TResult {

	const resolveStateCallbackRef = useRef<Callback<TResult>>(resolveStateCallback);
	const equalityCallbackRef = useRef<UseResolveStateEqualityCallback<TResult>>(equalityCallback);

	const [state, setState] = useState<TResult>(() => resolveStateCallback());
	const stateRef = useRef<TResult>(state);

	useEffect(
		() => {
			// Check if parameters have changed reference
			if (
				resolveStateCallbackRef.current === resolveStateCallback &&
				equalityCallbackRef.current === equalityCallback
			) return;

			resolveStateCallbackRef.current = resolveStateCallback;
			equalityCallbackRef.current = equalityCallback;

			const newState = resolveStateCallback();

			// Check if state has actually changed
			if (equalityCallback && equalityCallback(stateRef.current, newState)) return;

			stateRef.current = newState;
			setState(newState);
		},
		[resolveStateCallback, equalityCallback]
	);

	return state;
}
