import type { TooltipArrowPosition } from "../types/tooltip-arrow-position.type";

/**
 * Compare two objects of type {@link TooltipArrowPosition} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isTooltipArrowPositionEqual(value1: TooltipArrowPosition | null, value2: TooltipArrowPosition | null): boolean {
	return (
		(!value1 && !value2) ||
		(
			!!value1 &&
			!!value2 &&
			value1.align === value2.align &&
			value1.justify === value2.justify &&
			value1.transform.toStyleTransformCollectionString() === value2.transform.toStyleTransformCollectionString()
		)
	);
}
