import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TOOLTIP_RICH_CONTENT_CALLBACK_CONTEXT } from "../constants/tooltip-rich-content-callback-context.const";
import type { TooltipRichContentCallback } from "../types/tooltip-rich-content-callback.type";

/**
 * Returns context for {@link TOOLTIP_RICH_CONTENT_CALLBACK_CONTEXT} and ensures a non-null value
 */
export function useTooltipRichContentCallbackContext(): TooltipRichContentCallback {
	const result = useContext(TOOLTIP_RICH_CONTENT_CALLBACK_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
