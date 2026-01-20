import type { CSSProperties } from "react";

import { ProgressIndicatorPosition } from "../enums/progress-indicator-position.type";
import type { ProgressIndicatorProps } from "../types/progress-indicator-props.type";

/**
 * Resolve progress indicator container style based on parameters
 * @param props
 */
export function progressIndicatorContainerStyle(props: ProgressIndicatorProps): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: "transparent",
		display: "inline-flex",
		height: props.position === ProgressIndicatorPosition.Fill ? "100%" : undefined,
		justifyContent: "center",
		width: (props.position === ProgressIndicatorPosition.Fill || props.position === ProgressIndicatorPosition.FillHorizontal) ? "100%" : undefined
	};
}
