import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TOOLTIP_SHOW_CALLBACK_CONTEXT } from "../constants/tooltip-show-callback-context.const";
import type { TooltipShowCallback } from "../types/tooltip-show-callback.type";

/**
 * Returns context for {@link TOOLTIP_SHOW_CALLBACK_CONTEXT} and ensures a non-null value
 */
export function useTooltipShowCallbackContext(): TooltipShowCallback {
	const result = useContext(TOOLTIP_SHOW_CALLBACK_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
