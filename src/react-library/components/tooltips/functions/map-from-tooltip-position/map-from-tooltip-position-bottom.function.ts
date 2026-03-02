import type { TooltipPosition } from "../../types/position/tooltip-position.type";
import type { TooltipPositionBottom } from "../../types/position/tooltip-position-bottom.type";

/**
 * Map a tooltip position bottom to an existing tooltip position
 * @param mapTo
 * @param mapFrom
 */
export function mapFromTooltipPositionBottom(mapTo: TooltipPosition, mapFrom: TooltipPositionBottom): TooltipPosition {
	mapTo.marginTop = mapFrom.marginTop;
	mapTo.paddingTop = mapFrom.paddingTop;
	return mapTo;
}
