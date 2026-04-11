import { useEffect, useRef, useState } from "react";

import type { Callback } from "../../types";

/**
 * Custom hook to handle resolving some state based on a resolve state callback changing
 * Note: The callback being passed in should be a consistent reference, only updating state when the result would change.
 * Suggest passing in a callback derived from a useCallback hook
 * @param resolveState
 */
export function useResolveState<TResult>(resolveState: Callback<TResult>): TResult {

	const resolveStateRef = useRef<Callback<TResult>>(resolveState);

	const [state, setState] = useState<TResult>(() => resolveState());

	useEffect(
		() => {
			if (resolveStateRef.current === resolveState) return;
			resolveStateRef.current = resolveState;
			setState(resolveState());
		},
		[resolveState]
	);

	return state;
}
