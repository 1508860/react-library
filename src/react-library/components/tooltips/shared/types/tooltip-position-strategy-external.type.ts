import type { PositionStrategyExternalAll, SizePx } from "@react-library/common";

import type { TooltipArrowContent } from "./tooltip-arrow-content.type";

/**
 * Type for tooltip position strategy external
 */
export type TooltipPositionStrategyExternal = (
	Partial<TooltipArrowContent> &
	PositionStrategyExternalAll<SizePx, SizePx>
);
