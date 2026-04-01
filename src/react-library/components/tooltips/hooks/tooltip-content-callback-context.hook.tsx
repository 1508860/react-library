import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TOOLTIP_CONTENT_CALLBACK_CONTEXT } from "../constants/tooltip-content-callback-context.const";
import type { TooltipContentCallback } from "../types/tooltip-content-callback.type";

/**
 * Returns context for {@link TOOLTIP_CONTENT_CALLBACK_CONTEXT} and ensures a non-null value
 */
export function useTooltipContentCallbackContext(): TooltipContentCallback {
	const result = useContext(TOOLTIP_CONTENT_CALLBACK_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
