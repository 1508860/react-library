import type { IViewportPosition } from "../../interfaces";

/**
 * Compare two objects of type {@link IViewportPosition} and check if all values are equal
 * @param value1
 * @param value2
 */
export function areViewportPositionsEqual(value1: IViewportPosition, value2: IViewportPosition): boolean {
	return (
		value1.height === value2.height &&
		value1.marginBottom === value2.marginBottom &&
		value1.marginLeft === value2.marginLeft &&
		value1.marginRight === value2.marginRight &&
		value1.marginTop === value2.marginTop &&
		value1.width === value2.width
	);
}
