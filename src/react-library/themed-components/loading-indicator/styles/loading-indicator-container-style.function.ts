import type { CSSProperties } from "react";

import type { LoadingIndicatorProps } from "../types/loading-indicator-props.type";
import { LoadingIndicatorPosition } from "../enums/loading-indicator-position.type";

/**
 * Resolve loading indicator container style based on parameters
 * @param props
 */
export function loadingIndicatorContainerStyle(props: LoadingIndicatorProps): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: "transparent",
		display: "inline-flex",
		height: props.position === LoadingIndicatorPosition.Fill ? "100%" : undefined,
		justifyContent: "center",
		width: (props.position === LoadingIndicatorPosition.Fill || props.position === LoadingIndicatorPosition.FillHorizontal) ? "100%" : undefined
	};
}
