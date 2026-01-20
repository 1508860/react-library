import type { TooltipPosition } from "../../../shared/types/position/tooltip-position.type";
import type { TooltipPositionRight } from "../../../shared/types/position/tooltip-position-right.type";

/**
 * Map a tooltip position right to an existing tooltip position
 * @param mapTo
 * @param mapFrom
 */
export function mapFromTooltipPositionRight(mapTo: TooltipPosition, mapFrom: TooltipPositionRight): TooltipPosition {
	mapTo.marginLeft = mapFrom.marginLeft;
	mapTo.paddingLeft = mapFrom.paddingLeft;
	return mapTo;
}
