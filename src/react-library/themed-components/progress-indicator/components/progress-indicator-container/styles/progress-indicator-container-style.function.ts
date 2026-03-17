import type { CSSProperties } from "react";

import { ProgressIndicatorPosition } from "../../../enums/progress-indicator-position.type";

/**
 * Resolve progress indicator container style based on parameters
 * @param position
 */
export function progressIndicatorContainerStyle(position: ProgressIndicatorPosition): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: "transparent",
		display: "inline-flex",
		height: position === ProgressIndicatorPosition.Fill ? "100%" : undefined,
		justifyContent: "center",
		width: (position === ProgressIndicatorPosition.Fill || position === ProgressIndicatorPosition.FillHorizontal) ? "100%" : undefined
	};
}
