import type { IPositionStrategy, PositionStrategyExternalAll, SizePx } from "@react-library/common";

import type { TooltipPositionBottom } from "./tooltip-position-bottom.type";
import type { TooltipPositionLeft } from "./tooltip-position-left.type";
import type { TooltipPositionRight } from "./tooltip-position-right.type";
import type { TooltipPositionTop } from "./tooltip-position-top.type";

/**
 * Describes the necessary information about a tooltip's position for applying styles
 */
export type TooltipPosition = (
	IPositionStrategy<PositionStrategyExternalAll<SizePx, SizePx>> &
	Partial<TooltipPositionBottom> &
	Partial<TooltipPositionLeft> &
	Partial<TooltipPositionRight> &
	Partial<TooltipPositionTop>
);
