import { tooltipContainerStyle } from "./styles/tooltip-container-style.function";
import type { TooltipContainerProps } from "./types/tooltip-container-props.type";

/**
 * Tooltip container
 * @param props
 */
export function TooltipContainer(props: TooltipContainerProps) {
	return (
		<div
			key="tooltip-backdrop"
			style={tooltipContainerStyle(props.position)}
		>
			{props.children}
		</div>
	);
}
