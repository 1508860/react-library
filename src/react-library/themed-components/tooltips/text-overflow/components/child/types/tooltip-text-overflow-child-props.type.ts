import type { IContent, IWidth } from "@react-library/common";

import type { TooltipTextOverflowContent } from "../../../types/tooltip-text-overflow-content.type";
import type { TooltipTextOverflowWidth } from "../../../types/tooltip-text-overflow-width.type";

/**
 * Props for tooltip text overflow child component
 */
export type TooltipTextOverflowChildProps = (
	IContent<TooltipTextOverflowContent> &
	IWidth<TooltipTextOverflowWidth>
);
