import type { ButtonColourState } from "../types/button-colour-state.type";

/**
 * Compare two objects of type {@link ButtonColourState} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isButtonColourStateEqual(value1: ButtonColourState, value2: ButtonColourState): boolean {
	return (
		value1.backgroundColour?.toColourString() === value2.backgroundColour?.toColourString() &&
		value1.borderColour?.toColourString() === value2.borderColour?.toColourString() &&
		value1.boxShadow === value2.boxShadow &&
		value1.disabledOpacity === value2.disabledOpacity &&
		value1.hoverOpacity === value2.hoverOpacity &&
		value1.onColour.toColourString() === value2.onColour.toColourString() &&
		value1.pulseOpacity === value2.pulseOpacity
	);
}
