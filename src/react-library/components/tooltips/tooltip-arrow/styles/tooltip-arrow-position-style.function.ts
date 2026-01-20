import type { CSSProperties } from "react";

import type { TooltipArrowPosition } from "../types/tooltip-arrow-position.type";

/**
 * Resolve tooltip arrow position style based on parameters
 * @param tooltipPositionStrategy
 */
export function tooltipArrowPositionStyle(tooltipArrowPosition: TooltipArrowPosition | null): CSSProperties {
	return {
		alignItems: "start",
		display: "flex",
		flexDirection: "row",
		height: 0,
		justifyContent: "center",
		overflow: "visible",
		transform: tooltipArrowPosition?.transform.toStyleTransformCollectionString(),
		width: 0
	};
}
