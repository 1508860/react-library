import type { IIsValid, IPosition } from "@react-library/common";
import type { TooltipPositionBottom } from "./position/tooltip-position-bottom.type";
import type { TooltipPositionLeft } from "./position/tooltip-position-left.type";
import type { TooltipPositionRight } from "./position/tooltip-position-right.type";
import type { TooltipPositionTop } from "./position/tooltip-position-top.type";

/**
 * Type to describe if a tooltip position is valid and the position of the tooltip
 */
export type ValidTooltipPosition<
	TPosition extends (TooltipPositionBottom | TooltipPositionLeft | TooltipPositionRight | TooltipPositionTop)
> = (
		IIsValid &
		IPosition<TPosition>
	);
