import type { FloatingButtonGroupPosition } from "../../../types/floating-button-group-position.type";

/**
 * Function to determine if two {@link FloatingButtonGroupPosition} states are equal
 * @param state1
 * @param state2
 */
export function isFloatingButtonGroupPositionEqual(state1: FloatingButtonGroupPosition, state2: FloatingButtonGroupPosition): boolean {
	return (
		state1 &&
		state2 &&
		state1.alignItems === state2.alignItems &&
		state1.flexDirection === state2.flexDirection &&
		state1.gap === state2.gap &&
		state1.inset.bottom === state2.inset.bottom &&
		state1.inset.left === state2.inset.left &&
		state1.inset.right === state2.inset.right &&
		state1.inset.top === state2.inset.top
	);
}
