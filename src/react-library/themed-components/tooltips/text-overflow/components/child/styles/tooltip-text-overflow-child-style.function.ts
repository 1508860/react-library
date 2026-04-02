import type { CSSProperties } from "react";

import type { TooltipTextOverflowWidth } from "../../../types/tooltip-text-overflow-width.type";

/**
 * Resolve tooltip text overflow child style based on parameters
 * @param width
 */
export function tooltipTextOverflowChildStyle(width: TooltipTextOverflowWidth): CSSProperties {
	return {
		alignItems: "center",
		display: "inline-flex",
		flexDirection: "row",
		width: width
	};
}
