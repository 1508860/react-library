import type { CSSProperties } from "react";

import { ProgressIndicatorPosition } from "../enums/progress-indicator-position.type";

/**
 * Resolve progress indicator flat container style based on parameters
 * @param position
 */
export function progressIndicatorFlatContainerStyle(position: ProgressIndicatorPosition): CSSProperties {
	return {
		alignItems: "center",
		boxSizing: "border-box",
		display: "inline-flex",
		flexDirection: "row",
		flexShrink: 0,
		gap: 4,
		minWidth: 48, // Content width + padding
		paddingLeft: 4,
		paddingRight: 4,
		width: (position === ProgressIndicatorPosition.Fill || position === ProgressIndicatorPosition.FillHorizontal) ? "100%" : undefined
	};
}
