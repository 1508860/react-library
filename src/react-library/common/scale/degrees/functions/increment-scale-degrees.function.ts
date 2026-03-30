import { SCALE_DEGREES_FULL_POSITIVE } from "../constants/scale-degrees-full-positive.const";
import type { ScaleDegreesState } from "../types/scale-degrees-state.type";
import { ratioToScaleDegreesState } from "./ratio-to-scale-degrees.function";
import { scaleDegreesStateValue } from "./scale-degrees-state-value.function";

/**
 * Increment a {@link scaleDegreesState} by {@link incrementBy}
 * Note: a negative {@link incrementBy} will decrement {@link scaleDegreesState}
 * @param scaleDegreesState
 * @param incrementBy
 */
export function incrementScaleDegrees(scaleDegreesState: ScaleDegreesState, incrementBy: number): ScaleDegreesState {
	return ratioToScaleDegreesState({
		denominator: SCALE_DEGREES_FULL_POSITIVE,
		numerator: scaleDegreesStateValue(scaleDegreesState) + incrementBy
	});
}
