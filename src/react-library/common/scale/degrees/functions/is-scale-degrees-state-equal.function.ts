import type { ScaleDegreesState } from "../types/scale-degrees-state.type";

/**
 * Compare two objects of type {@link ScaleDegreesState} and check if all values are equal.
 * Note: null and undefined are considered equivalent
 * @param value1
 * @param value2
 */
export function isScaleDegreesStateEqual(value1: ScaleDegreesState | null | undefined, value2: ScaleDegreesState | null | undefined): boolean {
	return (
		(!value1 && !value2) ||
		(
			!!value1 &&
			!!value2 &&
			// Evaluate all values
			value1.degrees === value2.degrees &&
			value1.rotationCount === value2.rotationCount
		)
	);
}
