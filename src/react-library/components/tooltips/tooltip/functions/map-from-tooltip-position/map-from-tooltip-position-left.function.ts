import type { TooltipPosition } from "../../../shared/types/position/tooltip-position.type";
import type { TooltipPositionLeft } from "../../../shared/types/position/tooltip-position-left.type";

/**
 * Map a tooltip position left to an existing tooltip position
 * @param mapTo
 * @param mapFrom
 */
export function mapFromTooltipPositionLeft(mapTo: TooltipPosition, mapFrom: TooltipPositionLeft): TooltipPosition {
	mapTo.marginRight = mapFrom.marginRight;
	mapTo.paddingRight = mapFrom.paddingRight;
	return mapTo;
}
