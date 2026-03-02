import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TOOLTIP_SHOW_CONTEXT } from "../constants/tooltip-show-context.const";

/**
 * Returns context for {@link TOOLTIP_SHOW_CONTEXT} and ensures a non-null value
 */
export function useTooltipShowContext(): boolean {
	const result = useContext(TOOLTIP_SHOW_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};
