import { TOOLTIP_RICH_CHILD_PROPS_CONTEXT } from "../../constants/tooltip-rich-child-props-context.const";
import { TOOLTIP_RICH_CONTENT_CALLBACK_CONTEXT } from "../../constants/tooltip-rich-content-callback-context.const";

import type { TooltipRichInternalProps } from "./types/tooltip-rich-internal-props.type";
import { useTooltipRichInternalState } from "./hooks/use-tooltip-rich-internal-state.hook";

/**
 * Tooltip rich internal component
 * @param props
 */
export function TooltipRichInternal(props: TooltipRichInternalProps) {

	// Handle tooltip rich internal state
	const state = useTooltipRichInternalState();

	return (
		<TOOLTIP_RICH_CHILD_PROPS_CONTEXT value={state.childProps}>
			<TOOLTIP_RICH_CONTENT_CALLBACK_CONTEXT value={state.setcontent}>
				{props.children}
			</TOOLTIP_RICH_CONTENT_CALLBACK_CONTEXT>
		</TOOLTIP_RICH_CHILD_PROPS_CONTEXT>
	);
}
