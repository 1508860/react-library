import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { TOOLTIP_RICH_CHILD_PROPS_CONTEXT } from "../constants/tooltip-rich-child-props-context.const";
import type { TooltipRichChildProps } from "../types/tooltip-rich-child-props.type";

/**
 * Returns context for {@link TOOLTIP_RICH_CHILD_PROPS_CONTEXT} and ensures a non-null value
 */
export function useTooltipRichChildPropsContext(): TooltipRichChildProps {
	const result = useContext(TOOLTIP_RICH_CHILD_PROPS_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
