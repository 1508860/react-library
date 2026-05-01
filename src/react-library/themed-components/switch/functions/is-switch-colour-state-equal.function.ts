import type { SwitchColourState } from "../types/switch-colour-state.type";

/**
 * Compare two objects of type {@link SwitchColourState} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isSwitchColourStateEqual(value1: SwitchColourState, value2: SwitchColourState): boolean {
	return (
		value1.backgroundColour.toColourString() === value2.backgroundColour.toColourString() &&
		value1.borderColour.toColourString() === value2.borderColour.toColourString() &&
		value1.hoverColour.toColourString() === value2.hoverColour.toColourString() &&
		value1.iconColour.toColourString() === value2.iconColour.toColourString() &&
		value1.labelColour.toColourString() === value2.labelColour.toColourString() &&
		value1.thumbColour.toColourString() === value2.thumbColour.toColourString()
	);
}
