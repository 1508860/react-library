import { useEffect, useState } from "react";

import { ScaleDegrees } from "../enums/scale-degrees.type";
import { incrementScaleDegrees } from "../functions/increment-scale-degrees.function";
import { isScaleDegreesStateEqual } from "../functions/is-scale-degrees-state-equal.function";
import { scaleDegreesStateValue } from "../functions/scale-degrees-state-value.function";
import type { ScaleDegreesState } from "../types/scale-degrees-state.type";

/**
 * Describes use state hook result incrementing a {@link ScaleDegreesState} on a {@link timerMs}
 * @param scaleDegrees
 * @param timerMs
 */
export function useEasingLinearScaleDegreesState(
	scaleDegrees: ScaleDegreesState,
	timerMs: number
): [ScaleDegreesState] {

	// Important to use state in use effect as the update to this will trigger the recursive nature of this hook
	const [state, setState] = useState<ScaleDegreesState>(() => scaleDegrees);

	useEffect(
		() => {
			// Terminate if no change
			if (isScaleDegreesStateEqual(scaleDegrees, state)) return;

			const currentValue = scaleDegreesStateValue(state);
			const newValue = scaleDegreesStateValue(scaleDegrees);

			// Handle easing
			const timeout = setTimeout(
				() => {
					const newState: ScaleDegreesState = incrementScaleDegrees(state, (newValue > currentValue ? ScaleDegrees[1] : ScaleDegrees[-1]));
					setState(newState);
				},
				timerMs
			);
			return () => {
				clearTimeout(timeout);
			}
		},
		[scaleDegrees, timerMs, state]
	);

	return [state];
}
