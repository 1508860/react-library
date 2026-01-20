import type { IDimensions } from "../../interfaces";
import type { Size } from "../../units";

/**
 * Compare two objects of type {@link IDimensions} and check if all values are equal
 * @param value1
 * @param value2
 */
export function areDimensionsEqual(value1: IDimensions<Size, Size>, value2: IDimensions<Size, Size>): boolean {
	return (
		value1.height === value2.height &&
		value1.width === value2.width
	);
}
