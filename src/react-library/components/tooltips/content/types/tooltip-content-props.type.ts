import type { TooltipContent } from "../../shared/types/tooltip-content.type";
import type { TooltipRefCallback } from "../../shared/types/tooltip-ref-callback.type";

/**
 * Tooltip content props
*/
export type TooltipContentProps = (
	TooltipContent &
	TooltipRefCallback
);
