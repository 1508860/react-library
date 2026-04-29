import type { RadioButtonColourState } from "../types/radio-button-colour-state.type";

/**
 * Compare two objects of type {@link RadioButtonColourState} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isRadioButtonColourStateEqual(value1: RadioButtonColourState, value2: RadioButtonColourState): boolean {
	return (
		value1.hoverColour.toColourString() === value2.hoverColour.toColourString() &&
		value1.iconColour.toColourString() === value2.iconColour.toColourString() &&
		value1.labelColour.toColourString() === value2.labelColour.toColourString() &&
		value1.pulseColour.toColourString() === value2.pulseColour.toColourString()
	);
}
