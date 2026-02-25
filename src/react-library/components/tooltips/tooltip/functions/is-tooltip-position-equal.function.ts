import { isPositionStrategyExternalEqual } from "@react-library/common";

import type { TooltipPosition } from "../../shared/types/position/tooltip-position.type";

/**
 * Compare two objects of type {@link TooltipPosition} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isTooltipPositionEqual(value1?: TooltipPosition, value2?: TooltipPosition): boolean {
	return (
		(!value1 && !value2) ||
		(
			!!value1 &&
			!!value2 &&
			isPositionStrategyExternalEqual(value1.positionStrategy, value2.positionStrategy) &&
			// Evaluate all values
			value1.marginBottom === value2.marginBottom &&
			value1.marginLeft === value2.marginLeft &&
			value1.marginRight === value2.marginRight &&
			value1.marginTop === value2.marginTop &&
			value1.paddingBottom === value2.paddingBottom &&
			value1.paddingLeft === value2.paddingLeft &&
			value1.paddingRight === value2.paddingRight &&
			value1.paddingTop === value2.paddingTop
		)
	);
}
