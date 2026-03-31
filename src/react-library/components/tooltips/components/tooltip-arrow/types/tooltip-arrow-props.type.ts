import type { IPositionStrategy } from "@react-library/common";

import type { TooltipPositionStrategyExternal } from "../../../types/tooltip-position-strategy-external.type";

/**
 * Tooltip arrow props
 */
export type TooltipArrowProps = (
	Partial<IPositionStrategy<TooltipPositionStrategyExternal>>
);
