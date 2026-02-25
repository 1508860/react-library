import type { CSSProperties } from "react";

import type { TooltipPosition } from "../../shared/types/position/tooltip-position.type";

/**
 * Resolve tooltip container style based on parameters
 * @param tooltipPosition
 */
export function tooltipContainerStyle(tooltipPosition?: TooltipPosition): CSSProperties {
	return {
		bottom: tooltipPosition?.marginBottom,
		display: "inline-block",
		left: tooltipPosition?.marginLeft,
		opacity: tooltipPosition ? undefined : 0,
		paddingBottom: tooltipPosition?.paddingBottom,
		paddingLeft: tooltipPosition?.paddingLeft,
		paddingRight: tooltipPosition?.paddingRight,
		paddingTop: tooltipPosition?.paddingTop,
		position: "absolute",
		right: tooltipPosition?.marginRight,
		top: tooltipPosition?.marginTop
	};
}
