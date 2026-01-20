import { useEffect, useState } from "react";

import { ScalePercent } from "../enums/scale-percent.type";
import { incrementScalePercent } from "../functions/increment-scale-percent.function";

/**
 * Describes use state hook result incrementing a {@link scalePercent} on a {@link timerMs}
 * @param scalePercent
 * @param timerMs
 */
export function useEasingLinearScalePercentState(
	scalePercent: ScalePercent,
	timerMs: number
): [ScalePercent] {

	// Important to use state in use effect as the update to this will trigger the recursive nature of this hook
	const [state, setState] = useState<ScalePercent>(() => scalePercent);

	useEffect(
		() => {
			// Terminate if no change
			if (scalePercent === state) return;

			// Handle easing
			const timeout = setTimeout(
				() => {
					const newState: ScalePercent = incrementScalePercent(state, (scalePercent > state ? ScalePercent[1] : -ScalePercent[1]));
					setState(newState);
				},
				timerMs
			);
			return () => {
				clearTimeout(timeout);
			}
		},
		[scalePercent, timerMs, state]
	);

	return [state];
}
