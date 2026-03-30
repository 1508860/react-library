import { SCALE_DEGREES_FULL_POSITIVE } from "../constants/scale-degrees-full-positive.const";
import type { ScaleDegreesState } from "../types/scale-degrees-state.type";

/**
 * Resolves the overall total value
 * @param scaleDegreesState
 */
export function scaleDegreesStateValue(scaleDegreesState: ScaleDegreesState): number {
	return ((scaleDegreesState.rotationCount * SCALE_DEGREES_FULL_POSITIVE) + scaleDegreesState.degrees);
}
