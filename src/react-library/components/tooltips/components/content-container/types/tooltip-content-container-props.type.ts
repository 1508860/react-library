import type { IContent, IRefCallback } from "@react-library/common";

import type { TooltipContent } from "../../../types/tooltip-content.type";
import type { TooltipElement } from "../../../types/tooltip-element.type";

/**
 * Tooltip content container props
*/
export type TooltipContentContainerProps = (
	IContent<TooltipContent> &
	IRefCallback<TooltipElement>
);
