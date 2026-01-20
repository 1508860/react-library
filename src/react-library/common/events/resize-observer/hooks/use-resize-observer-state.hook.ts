import { useCallback, useEffect, useRef, useState } from "react";

import {
	areDimensionsEqual,
	DIMENSIONS_SIZE_PX_DEFAULT,
	resolveDimensionsPx,
	type DimensionsPx
} from "../../../dimensions";

import { ResizeObserverDebounce } from "../enums/resize-observer-debounce.type";

/**
 * Custom hook for an element's size when it is resized
 * @param isEnabled should the hook be active. The current state will result in {@link DIMENSIONS_SIZE_PX_DEFAULT} if not
 * @param setToDefaultIfDisabled if the hook is disabled, should the state be reset to {@link DIMENSIONS_SIZE_PX_DEFAULT}
 * @param element element to get dimensions state for
 * @param resizeBoxOptions Determines box sizing boundary to measure resize for
 * @param debounceMs Only emit result after a certain amount of time has passed since the last event was fired. 0 fires all events immediately
 */
export function useResizeObserverState(
	isEnabled: boolean,
	setToDefaultIfDisabled: boolean,
	element: Element | null,
	resizeBoxOptions: ResizeObserverBoxOptions,
	debounceMs: ResizeObserverDebounce
): [DimensionsPx] {

	const [state, setState] = useState<DimensionsPx>(element ? resolveDimensionsPx(element) : DIMENSIONS_SIZE_PX_DEFAULT);
	const stateRef = useRef<DimensionsPx>(state);

	const setValidatedState = useCallback(
		(newState: DimensionsPx) => {
			if (!areDimensionsEqual(stateRef.current, newState)) {
				stateRef.current = newState;
				setState(newState);
			}
		},
		[]
	);

	useEffect(
		() => {
			// Validate the element
			if (!isEnabled || element === null) {
				if (setToDefaultIfDisabled) setValidatedState(DIMENSIONS_SIZE_PX_DEFAULT);
				return;
			}

			// Handle resize events
			let debounceTimeout: NodeJS.Timeout | undefined = undefined;
			const shouldDebounce: boolean = debounceMs > ResizeObserverDebounce.None;

			const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
				if (shouldDebounce) {
					if (debounceTimeout) clearTimeout(debounceTimeout);
					debounceTimeout = setTimeout(
						() => entries.forEach(entry => setValidatedState(resolveDimensionsPx(entry.target))),
						debounceMs
					)
				} else {
					entries.forEach(entry => setValidatedState(resolveDimensionsPx(entry.target)));
				}
			});

			// Observe resize event
			resizeObserver.observe(element, { box: resizeBoxOptions });

			// Dispose
			return () => {
				resizeObserver.disconnect();
				if (debounceTimeout) clearTimeout(debounceTimeout);
			};
		},
		[
			debounceMs,
			element,
			isEnabled,
			resizeBoxOptions,
			setToDefaultIfDisabled,
			setValidatedState
		]
	);

	return [state];

}
