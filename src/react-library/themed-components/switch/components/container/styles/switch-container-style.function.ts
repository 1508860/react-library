import type { CSSProperties } from "react";

import type { Size } from "@react-library/common";

/**
 * Resolve switch container style based on parameters
 * @param width
 */
export function switchContainerStyle(width: Size | undefined): CSSProperties {
	return {
		alignItems: "center",
		display: "inline-flex",
		flexDirection: "row",
		justifyContent: "end",
		position: "relative",
		width: width
	};
}
