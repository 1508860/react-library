import type { IContent, IWidth } from "@react-library/common";

import type { TooltipTextOverflowContent } from "./tooltip-text-overflow-content.type";
import type { TooltipTextOverflowWidth } from "./tooltip-text-overflow-width.type";

/**
 * Props for tooltip text overflow component
 */
export type TooltipTextOverflowProps = (
	IContent<TooltipTextOverflowContent> &
	IWidth<TooltipTextOverflowWidth>
)
