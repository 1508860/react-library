import type { TooltipContentProps } from "./types/tooltip-content-props.type";
import { TOOLTIP_CONTENT_STYLE } from "./styles/tooltip-content-style.const";

/**
 * Tooltip content
 * @param props
 */
export function TooltipContent(props: TooltipContentProps) {
	return (
		<div
			ref={props.ref}
			style={TOOLTIP_CONTENT_STYLE}
		>
			<props.content />
		</div>
	);
}
