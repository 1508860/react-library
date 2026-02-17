import type { ViewportPositionPx } from "../types/viewport-position-px.type";

/**
 * Compare two objects of type {@link ViewportPositionPx} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isViewportPositionPxEqual(value1: ViewportPositionPx, value2: ViewportPositionPx): boolean {
	return (
		value1.height === value2.height &&
		value1.marginBottom === value2.marginBottom &&
		value1.marginLeft === value2.marginLeft &&
		value1.marginRight === value2.marginRight &&
		value1.marginTop === value2.marginTop &&
		value1.width === value2.width
	);
}
