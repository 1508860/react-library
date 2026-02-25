import type { TooltipArrowContent } from "../../shared/types/tooltip-arrow-content.type";
import type { TooltipPositionStrategy } from "../../shared/types/tooltip-position-strategy-props.type";

/**
 * Tooltip arrow props
 */
export type TooltipArrowProps = (
	Partial<TooltipArrowContent> &
	Partial<TooltipPositionStrategy>
);
