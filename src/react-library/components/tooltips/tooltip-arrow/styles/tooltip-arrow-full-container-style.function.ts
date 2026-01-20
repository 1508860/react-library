import type { CSSProperties } from "react";

import type { TooltipArrowPosition } from "../types/tooltip-arrow-position.type";

/**
 * Resolve tooltip arrow container style based on parameters
 * @param tooltipPositionStrategy
 */
export function tooltipArrowFullContainerStyle(tooltipArrowPosition: TooltipArrowPosition | null): CSSProperties {
	return {
		alignItems: tooltipArrowPosition?.align,
		display: "flex",
		flexDirection: "row",
		inset: 0,
		justifyContent: tooltipArrowPosition?.justify,
		position: "absolute"
	};
};
