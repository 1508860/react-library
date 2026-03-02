import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TOOLTIP_CHILD_PROPS_CONTEXT } from "../constants/tooltip-child-props-context.const";
import type { TooltipChildProps } from "../types/tooltip-child-props.type";

/**
 * Returns context for {@link TOOLTIP_CHILD_PROPS_CONTEXT} and ensures a non-null value
 */
export function useTooltipChildPropsContext(): TooltipChildProps {
	const result = useContext(TOOLTIP_CHILD_PROPS_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
