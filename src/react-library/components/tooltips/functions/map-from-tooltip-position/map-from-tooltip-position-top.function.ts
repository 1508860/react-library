import type { TooltipPosition } from "../../types/position/tooltip-position.type";
import type { TooltipPositionTop } from "../../types/position/tooltip-position-top.type";

/**
 * Map a tooltip position top to an existing tooltip position
 * @param mapTo
 * @param mapFrom
 */
export function mapFromTooltipPositionTop(mapTo: TooltipPosition, mapFrom: TooltipPositionTop): TooltipPosition {
	mapTo.marginBottom = mapFrom.marginBottom;
	mapTo.paddingBottom = mapFrom.paddingBottom;
	return mapTo;
}
