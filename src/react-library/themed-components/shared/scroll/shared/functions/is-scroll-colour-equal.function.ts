import type { ScrollColour } from "../types/scroll-colour.type";

/**
 * Compare two objects of type {@link ScrollColour} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isScrollColourEqual(value1: ScrollColour, value2: ScrollColour): boolean {
	return (
		value1.backgroundColour?.toColourString() === value2.backgroundColour?.toColourString() &&
		value1.scrollbarBackgroundColour?.toColourString() === value2.scrollbarBackgroundColour?.toColourString() &&
		value1.scrollbarColour.toColourString() === value2.scrollbarColour.toColourString()
	);
}
