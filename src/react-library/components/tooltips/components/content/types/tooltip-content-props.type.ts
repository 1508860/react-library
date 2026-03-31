import type { IContent, IRefCallback } from "@react-library/common";
import type { TooltipContent } from "../../../types/tooltip-content.type";
import type { TooltipElement } from "../../../types/tooltip-element.type";

/**
 * Tooltip content props
*/
export type TooltipContentProps = (
	IContent<TooltipContent> &
	IRefCallback<TooltipElement>
);
