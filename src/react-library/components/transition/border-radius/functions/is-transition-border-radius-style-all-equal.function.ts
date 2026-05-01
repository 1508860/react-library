import type { TransitionBorderRadiusStyleAll } from "../types/transition-border-radius-style-all.type";

/**
 * Compare two objects of type {@link TransitionBorderRadiusStyleAll} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isTransitionBorderRadiusStyleAllEqual(
	value1: TransitionBorderRadiusStyleAll,
	value2: TransitionBorderRadiusStyleAll
): boolean {
	return (
		value1.boxShadow === value2.boxShadow &&
		value1.colour?.toColourString() === value2.colour?.toColourString() &&
		value1.radius === value2.radius &&
		value1.style === value2.style &&
		value1.width === value2.width
	);
}
