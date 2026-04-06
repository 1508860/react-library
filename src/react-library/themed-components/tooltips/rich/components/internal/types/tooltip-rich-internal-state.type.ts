import type { IChildProps, ISetContent } from "@react-library/common";

import type { TooltipRichChildProps } from "../../../types/tooltip-rich-child-props.type";
import type { TooltipRichContentCallback } from "../../../types/tooltip-rich-content-callback.type";

/**
 * Tooltip rich internal component state
 */
export type TooltipRichInternalState = (
	IChildProps<TooltipRichChildProps> &
	ISetContent<TooltipRichContentCallback>
);
