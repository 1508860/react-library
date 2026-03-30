import { useEffect, useState } from "react";

import { ScaleDegrees } from "../enums/scale-degrees.type";
import { incrementScaleDegrees } from "../functions/increment-scale-degrees.function";

/**
 * Describes use state hook result incrementing a {@link scaleDegrees} on a {@link timerMs}
 * @param scaleDegrees
 * @param timerMs
 */
export function useEasingLinearScaleDegreesState(
	scaleDegrees: ScaleDegrees,
	timerMs: number
): [ScaleDegrees] {

	// Important to use state in use effect as the update to this will trigger the recursive nature of this hook
	const [state, setState] = useState<ScaleDegrees>(() => scaleDegrees);

	useEffect(
		() => {
			// Terminate if no change
			if (scaleDegrees === state) return;

			// Handle easing
			const timeout = setTimeout(
				() => {
					const newState: ScaleDegrees = incrementScaleDegrees(state, (scaleDegrees > state ? ScaleDegrees[1] : -ScaleDegrees[1]));
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
