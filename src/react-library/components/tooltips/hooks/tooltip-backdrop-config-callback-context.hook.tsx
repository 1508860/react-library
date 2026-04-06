import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TOOLTIP_BACKDROP_CONFIG_CALLBACK_CONTEXT } from "../constants/tooltip-backdrop-config-callback-context.const";
import type { TooltipBackdropConfigCallback } from "../types/tooltip-backdrop-config-callback.type";

/**
 * Returns context for {@link TOOLTIP_BACKDROP_CONFIG_CALLBACK_CONTEXT} and ensures a non-null value
 */
export function useTooltipBackdropConfigCallbackContext(): TooltipBackdropConfigCallback {
	const result = useContext(TOOLTIP_BACKDROP_CONFIG_CALLBACK_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
