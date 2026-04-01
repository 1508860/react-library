import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TOOLTIP_PLAIN_CHILD_PROPS_CONTEXT } from "../constants/tooltip-plain-child-props-context.const";
import type { TooltipPlainChildProps } from "../types/tooltip-plain-child-props.type";

/**
 * Returns context for {@link TOOLTIP_PLAIN_CHILD_PROPS_CONTEXT} and ensures a non-null value
 */
export function useTooltipPlainChildPropsContext(): TooltipPlainChildProps {
	const result = useContext(TOOLTIP_PLAIN_CHILD_PROPS_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
