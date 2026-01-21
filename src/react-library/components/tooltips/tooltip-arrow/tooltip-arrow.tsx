import type { ReactElement } from "react";

import { useTooltipArrowPositionState } from "./hooks/use-tooltip-arrow-position-state.hook";
import { TOOLTIP_ARROW_CONTAINER_STYLE } from "./styles/tooltip-arrow-container-style.function";
import { tooltipArrowFullContainerStyle } from "./styles/tooltip-arrow-full-container-style.function";
import { tooltipArrowPositionStyle } from "./styles/tooltip-arrow-position-style.function";
import type { TooltipArrowProps } from "./types/tooltip-arrow-props.type";

/**
 * Tooltip arrow component that deals specifically with the tootlip arrow that points from the tooltip component, to the element associated with the tooltip
 * @param props
 */
export function TooltipArrow<TContent extends ReactElement>(props: TooltipArrowProps<TContent>) {

	const [tooltipArrowPosition] = useTooltipArrowPositionState(props.tooltipPositionStrategy);

	return (
		<div style={tooltipArrowFullContainerStyle(tooltipArrowPosition)}>
			<div style={tooltipArrowPositionStyle(tooltipArrowPosition)}>
				<div style={TOOLTIP_ARROW_CONTAINER_STYLE}>
					{props.content}
				</div>
			</div>
		</div>
	);
}
