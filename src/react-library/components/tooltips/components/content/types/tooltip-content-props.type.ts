import type { TooltipContent } from "../../../types/tooltip-content.type";
import type { TooltipRefCallback } from "../../../types/tooltip-ref-callback.type";

/**
 * Tooltip content props
*/
export type TooltipContentProps = (
	TooltipContent &
	TooltipRefCallback
);
