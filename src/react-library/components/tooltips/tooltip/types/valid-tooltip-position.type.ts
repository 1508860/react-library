import type { IIsValid, IPosition } from "@react-library/common";
import type { TooltipPositionBottom } from "../../shared/types/position/tooltip-position-bottom.type";
import type { TooltipPositionLeft } from "../../shared/types/position/tooltip-position-left.type";
import type { TooltipPositionRight } from "../../shared/types/position/tooltip-position-right.type";
import type { TooltipPositionTop } from "../../shared/types/position/tooltip-position-top.type";

/**
 * Type to describe if a tooltip position is valid and the position of the tooltip
 */
export type ValidTooltipPosition<
	TPosition extends (TooltipPositionBottom | TooltipPositionLeft | TooltipPositionRight | TooltipPositionTop)
> = (
		IIsValid &
		IPosition<TPosition>
	);
